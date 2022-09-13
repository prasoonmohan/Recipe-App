import React, { useState,useContext } from "react";
import Pagination from "./Pagination";
import CardDish from "./CardDish";
import Popup from "./Popup";
import AddToCart from "./AddToCart";

// importing all menu context
import { AllMenuContext } from "./Menus";

function FilteredDishes(props) {
  // define a variable for asign value of useContext
  let allMenus = useContext(AllMenuContext)

  // for filterd dishes menus
  let [filteredDishes, setFilteredDishes] = useState([]);

  // button active effect for filterd dishes
  let [activeDish, setActiveDish] = useState("Beef");

  // add to cart
  const [addToCart,setAddToCart] = useState([ ])

  // pagination
  let [currentPage, setcurrentPage] = useState(1);
  let [itemsPerPage, setItemsPerPage] = useState(4);
  let indexOfLastDish = currentPage * itemsPerPage;
  // 1 * 4 = 4
  // 2 * 4 = 8
  // 3 * 4 = 12
  let indexOfFirstDish = indexOfLastDish - itemsPerPage;
  // 4 - 4 = 0
  //8  - 4 = 4
  //12 - 4 = 8
  let showTheseDishesNOw = filteredDishes.slice(
    indexOfFirstDish,
    indexOfLastDish
  );

      // popup dish
let [currentDish,setCurrentDish] = useState('')
  // popup
  let [showPopUp,setShowPopUp] = useState(false)
  // show popup
  function showPopUpHandler(popupDish){
    setShowPopUp(true)
    setCurrentDish(popupDish)
  }
  // close popup
  function closePopUpHandler(){
    setShowPopUp(false)
  }



  // show dishes on default page of filterd dishes
  let maxItem = 4;
  let oneDishItem = props.oneDish.map((menuItem, index) => {
    if (index < maxItem) {
      return <CardDish menuItem={menuItem} 
      
      />;
    }
  });

  //   show dishes on click
  function showFilterdDishesHandler(category) {
    props.setOneDish([]);
    setActiveDish(category);
    let filteredDish = allMenus
      .filter((item) => {
        return item.strCategory === category;
      })
      .map((menuItem) => {
        return (
          // re-used components
          <CardDish menuItem={menuItem} 
          // passing function through props
          showpopup={showPopUpHandler}/>
        );
      });
    setFilteredDishes(filteredDish);
  }

  //   lets show all dishes categories
  let allCategories = props.categories.map((Item) => {
    return (
      <li
        className={Item.strCategory == activeDish ? "active" : ""}
        onClick={() => {
          showFilterdDishesHandler(Item.strCategory);
        }}
      >
        {Item.strCategory}
      </li>
    );
  });

  // add to cart
  const addToCartHandler =(cartImg,cartTitle)=>{
    setAddToCart(
      
      [
        ...addToCart,
        {
          "img" : cartImg ,
          "title" : cartTitle
        }
      ]
    )
    
    setShowPopUp(false)
  }

  // rendering....
  return (
    <>
        
       
    <div className="filtred-dishes">
     { showPopUp && <Popup 

      // close popup
      closePopup={closePopUpHandler}

       // popup dish
       currentDish={currentDish}

        // pop up dish details
        popupDishes={props.allMenus}

        // add to cart
        addToCartHandler={addToCartHandler}
     /> }
      <div className="container">

        {/* add to cart */}
        <AddToCart addToCart={addToCart}/>

        <div className="text-center">
          <h2>Choose your DISHES</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            sed reiciendis praesentium incidunt voluptas quibusdam illo. Dolorem
            mollitia quisquam saepe?
          </p>
        </div>
        <div className="filterd-dishes">
          <ul>{allCategories}</ul>
        </div>
        <div className="filterd-dishes-results">
          <ul className="flex flex-wrap gap-30">
            {oneDishItem}
            {oneDishItem != 0 || filteredDishes.length != 0 ? (
              showTheseDishesNOw
            ) : (
              <div className="alert">
                <h3>Sorry , No Dhishes Found !</h3>
                <h4>Please Try Another Item</h4>
              </div>
            )}
          </ul>
        </div>

        <Pagination
          filteredDishes={filteredDishes}
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          // passing state through props
          setcurrentPage={setcurrentPage}
        />
      </div>
    </div>
    </>
  );
}

export default FilteredDishes;
