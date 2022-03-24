import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'



const Shop = () => {
        const [products, setProducts] = useState([]);
        const [cart,setCart]=useState([])       
        useEffect(()=>{
              fetch('products.json')
              .then(res => res.json())
              .then(data=> setProducts(data))
              
        },[]);

        const addToCartClick =(product)=>{
             const newCart = [...cart,product]
             setCart(newCart);
      }
      
         return (
           
            <div className="shop-container">
                  <div className="products-container">
                        {
                              products.map(product=><Product 
                                    key={product.id} 
                                    product={product}
                                    addToCartClick={addToCartClick}>
                                          
                                    </Product>)
                        }
                  </div>

                  <div className="cart-container">
                        <h1>Order Summery</h1>
                        <h3>Selected Items: {cart.length}</h3>
                        <p>Total Price:</p>
                        <p>Total Shipping Charge:</p>
                        <p>Tax:</p>
                        <p>Grand Total:</p>
                        <button>Clear Cart</button>
                        
                        <button>Review Order</button>
                  </div>
            </div>
          );
};

export default Shop;