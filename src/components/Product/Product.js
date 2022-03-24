import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = ({product,addToCartClick}) => {
     
      
      const {name,img,seller,price,ratings}=product;
      
      return (
            <div className="product">
                <img src={img} alt="" />
                <h4>{name}</h4>
                <p>Price: BDT {price}</p>
                
                <p>Manufacturer: {seller}</p>
                <p><small>Rating: {ratings} Star</small></p>
                <button onClick={()=>addToCartClick(product)}>Add to Cart <FontAwesomeIcon icon={ faShoppingCart}></FontAwesomeIcon ></button>
             </div>
            
      );
      
};

export default Product;