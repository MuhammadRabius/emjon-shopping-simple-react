import React, { useEffect, useState } from 'react';
import { addToDb, getStoreCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
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

        useEffect(()=>{
              const storeCart = getStoreCart();
              const saveCart =[];
              for(const id in storeCart){
                    const addedProduct = products.find(product => product.id === id)
                    if(addedProduct){
                         const quantity = storeCart[id]
                         addedProduct.quantity = quantity;
                         console.log(addedProduct)
                         saveCart.push(addedProduct);
                    }
              }
              setCart(saveCart);
        },[products])

        const addToCartClick =(selectedProduct)=>{
            let newCart=[];
            const exists = cart.find(product=>product.id ===selectedProduct.id);
            if(!exists){
                  selectedProduct.quantity = 1;
                  newCart = [...cart,selectedProduct];
            }

            else{
                  const rest = cart.filter(product =>product.id !== selectedProduct.id);
                  exists.quantity = exists.quantity +1;
                  newCart=[...rest,exists];
            }
            
             setCart(newCart);
             addToDb(selectedProduct.id)
           
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

                        {/* Cart Component */}
                  <div >
                        <Cart cart={cart} ></Cart>
                  </div>
            </div>
          );
};

export default Shop;