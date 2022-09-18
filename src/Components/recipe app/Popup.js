import React from 'react'

// import icons from Boxicons
import { BoxIconElement } from 'boxicons'

// useContext
import { useContext } from 'react'
import { dispatchContext } from '../../context/AppProvider'

// new method to define props without using prop.
function Popup( {closePopup,currentDish,popupDishes,addToCartHandler} ) {
  
  
  // set variable for use Context
  let dispatch = useContext(dispatchContext);
  
 

  let popupDishDetails = popupDishes.filter((menuItem)=>{
    return (
      menuItem.strMeal == currentDish
    )
}).map((item)=>{
  return(
    <div className='popup-content-inner'>
    <div className="popup-header">
    <img src={item.strMealThumb} />
    <h5 className="popup-header-category">{item.strCategory}</h5>
    </div>
      <h2>{item.strMeal}</h2>
     <ul className="dish-ingredients">
     <li>{item.strIngredient1}</li>
      <li>{item.strIngredient2}</li>
      <li>{item.strIngredient3}</li>
      <li>{item.strIngredient4}</li>
      
     
     </ul>

     
     <button   onClick={()=> {
     addToCartHandler(item.strMealThumb , item.strMeal);
     dispatch({
      type : "add_to_cart",
      payload : {
        title : item.strMeal ,
        img : item.strMealThumb ,
      } ,
     }); }
                               }>Order Now</button>
        <h5 className="popup-close" onClick={closePopup}> <i class='bx bx-x'></i> </h5>
    </div>
  )
})

  return (
    <div className='popup'>
      <div className="popup-content">
        {popupDishDetails}
        
      </div>
    </div>
  )
}

export default Popup
