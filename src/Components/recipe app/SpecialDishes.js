import React, { useContext, useState } from "react";
import CardDish from "./CardDish";
import Popup from "./Popup";
import AddToCart from "./AddToCart";

// importing menu context
import { AllMenuContext } from './Menus';

function SpecialDishes() {

  // define usecontect in to a variable
  const allMenus = useContext(AllMenuContext)


  // add to cart
  const [addToCart,setAddToCart] = useState(' https://images.pexels.com/photos/4226869/pexels-photo-4226869.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')


  // popup dish
let [currentDish,setCurrentDish] = useState('')

  // popup...
  let [showPopUp, setShowPopUp] = useState(false);
  // show popup handler
  function showPopupHandler(popupDish) {
    setShowPopUp(true);
    setCurrentDish(popupDish)
  }
  // close popup handler
  function closePopupHandler(){
    setShowPopUp(false)
}



  // special dishes...
  let maxDishes = 8;
  let specialMenus = allMenus.map((menuItem, index) => {
    if (index < maxDishes) {
      return (
        // re-used componenst
        <CardDish
          menuItem={menuItem}
          // passing function through props
          showpopup={showPopupHandler}
         
        />
      );
    }
  });


  // add to cart
  const addToCartHandler =(cartImg,cartTitle)=>{
    setAddToCart(cartImg)
    setShowPopUp(false)
  }

  // rendering...
  return (
    <section className="special-dishes">

    {/* rendering popup  - popup only show when the showPopUp state value is true*/}
      {showPopUp && <Popup 
      // passing function through props
      closePopup={closePopupHandler} 

      // popup dish
      currentDish={currentDish}
      
       // pop up dish details
       popupDishes={allMenus}

       addToCartHandler={addToCartHandler}
      />}


      <div className="container">
      <AddToCart addToCart={addToCart}/>
        <div className="special-dishes-content text-center">
          <h2>Our Special Dishes</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt,
            officiis et laborum quasi culpa laboriosam perferendis repudiandae?
            A officia aperiam dignissimos pariatur molestiae. Iste, iusto?
          </p>
        </div>
        <div className="special-dishes-list">
          <ul className="flex flex-wrap gap-30">{specialMenus}</ul>
        </div>
      </div>
    </section>
  );
}

export default SpecialDishes;
