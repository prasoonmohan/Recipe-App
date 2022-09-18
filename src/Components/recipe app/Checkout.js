import React from 'react'
import { useContext } from 'react'
import { stateContext } from '../../context/AppProvider'


function Checkout() {

  const cartPackage = useContext(stateContext);

  let cartItems = cartPackage.cartItem.map((item)=>{
        
    return (<li>
        <img src={item.img}  />
        <h6>{item.title}</h6>
        </li>
    );
})

  return (
    <div className="container-checkout ">
    <h1 className='checkout-h1'>Your Dishes</h1>
        <div className="checkout-section">
          <div className=''>
            <div className='checkout-dishes '>
                <ul>{cartItems}</ul> 
            </div>
          </div>
        </div>
    </div>
  )
}

export default Checkout
