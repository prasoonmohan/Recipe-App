import React from 'react'

function AddToCart(props) {
  return (
    <div className="add-to-cart-wrapper">
        <div className="add-to-cart-item">
            <img src={props.addToCart}  />
            <h6>Item name</h6>
        </div>
    </div>
  )
}

export default AddToCart