import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
      
      let total = 0;
      let shipping = 0;
      let quantity = 0;
      for(const product of cart){
           quantity = quantity + product.quantity
           total = total + product.price * product.quantity;
           shipping =shipping + product.shipping ;
      }
      const tax = parseFloat( (total *0.1).toFixed(2));
      const grandTotal = (total+shipping+tax);
      return (
            <div className="cart-container">
                  <h1>Order Summery</h1>
                        <h3>Selected Items: {quantity}</h3>
                        <p>Total Price:BDT{total}</p>
                        <p>Total Shipping Charge:  {shipping}</p>
                        <p>Tax: {tax}</p>
                        <p>Grand Total: {grandTotal}</p>
                        <button>Clear Cart</button>
                        
                        <button>Review Order</button>
            </div>
      );
};

export default Cart;