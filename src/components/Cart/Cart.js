import React from 'react';

const Cart = ({cart}) => {
      return (
            <div>
                  <h1>Order Summery</h1>
                        <h3>Selected Items: {cart.length}</h3>
                        <p>Total Price:</p>
                        <p>Total Shipping Charge:</p>
                        <p>Tax:</p>
                        <p>Grand Total:</p>
                        <button>Clear Cart</button>
                        
                        <button>Review Order</button>
            </div>
      );
};

export default Cart;