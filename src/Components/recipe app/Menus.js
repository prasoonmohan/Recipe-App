import React, { useState, useEffect } from "react";

// routing
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Footer from "./Footer";
import Hero from "./Hero";
import SpecialDishes from "./SpecialDishes";
import FilteredDishes from "./FilteredDishes";
import Checkout from "./Checkout";

import { AppProvider } from "../../context/AppProvider";

// named export
export const AllMenuContext = React.createContext();

function Menus() {
  // for all menus
  const [menu, setMenu] = useState([]);

  // for menus categories
  const [categorieData, setCategorieData] = useState([]);

  // loading effect
  const [loading, setLoading] = useState(true);

  // set default dish in filterd dishes
  const [oneDish, setOneDish] = useState([]);

  // get all menus
  async function getAllMenu() {
    const API_URL = "https://www.themealdb.com/api/json/v1/1/search.php?f=c";
    let responce = await fetch(API_URL);
    let data = await responce.json();
    setMenu(data.meals);
    setLoading(false);
  }
  // get list by categories
  async function getAllCategories() {
    const API_URL = "https://www.themealdb.com/api/json/v1/1/categories.php";
    let responce = await fetch(API_URL);
    let categorieData = await responce.json();
    setCategorieData(categorieData.categories);
  }

  // get only one item
  async function getOneDish() {
    const API_URL = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef";
    let responce = await fetch(API_URL);
    let oneItem = await responce.json();
    setOneDish(oneItem.meals);
  }

  // calling all API
  useEffect(() => {
    getAllMenu();
    getAllCategories();
    getOneDish();
  }, []);

  // rendering....
  return (
    <div>
      <Router>
      
        <AppProvider >
        <div className="hero-nav"></div>
        <Hero />

        <Routes> 
        
          {/* page 1 */}
          <Route
            exact
            path="/"
            element={
              // exporting context
              <AllMenuContext.Provider value={menu}>
                {!loading ? (
                  <SpecialDishes />
                ) : (
                  <div className="loader">
                    <h1>Loading...</h1>
                  </div>
                )}
                {!loading ? (
                  <FilteredDishes
                    categories={categorieData}
                    allMenus={menu}
                    oneDish={oneDish}
                    setOneDish={setOneDish}
                  />
                ) : null}
                <Footer />
              </AllMenuContext.Provider>
              
            }
          />

          {/* page 2 */}
          <Route exact path="/checkout" element={<Checkout />} />
        </Routes>
        </AppProvider>
      </Router>
    </div>
  );
}

// default export
export default Menus;
