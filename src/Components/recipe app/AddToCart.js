import React from 'react'
import { BoxIconElement } from 'boxicons'

import { stateContext } from '../../context/AppProvider'
import { useContext } from 'react';

function AddToCart(props) {

    const cartPackage = useContext(stateContext);
    

    let cartItems = cartPackage.cartItem.map((item)=>{
        
        return (<div>
            <img src={item.img}  />
            <h6>{item.title}</h6>
            </div>
        );
    })

  return (
    <div className="add-to-cart-wrapper">
        <div className="add-to-cart-item">
        <h6 className="text-center">your cart <i class='bx bx-dish'></i></h6>
        {cartItems}
            </div>
    </div>
  )
}

export default AddToCart