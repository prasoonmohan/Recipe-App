import React from 'react'

// import icons from Boxicons
import { BoxIconElement } from 'boxicons'


// new method to define props without using prop.
function Popup( {closePopup,currentDish,popupDishes} ) {

  let popupDishDetails = popupDishes.filter((menuItem)=>{
    return (
      menuItem.strMeal == currentDish
    )
}).map((item)=>{
  return(
    <div className='popup-content-inner'>
    <div className="popup-header">
    <img src={item.strMealThumb} />
    </div>
      <h2>{item.strMeal}</h2>
    </div>
  )
})
 
  return (
    <div className='popup'>
      <div className="popup-content">
        {popupDishDetails}
        <button>Order Now</button>
        <h5 className="popup-close" onClick={closePopup}> <i class='bx bx-x'></i> </h5>
      </div>
    </div>
  )
}

export default Popup
