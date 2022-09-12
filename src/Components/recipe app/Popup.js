import React from 'react'

// import icons from Boxicons
import { BoxIconElement } from 'boxicons'


// new method to define props without using prop.
function Popup( {closePopup,currentDish,popupDishes,addToCartHandler} ) {
  console.log(popupDishes)

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

     <button onClick={()=> addToCartHandler(item.strMealThumb , item.strMeal) }>Order Now</button>
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
