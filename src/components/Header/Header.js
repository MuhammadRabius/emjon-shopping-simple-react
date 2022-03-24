import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
      return (
            <div>
                  <nav className="header-navber">
                        <img src={logo} alt="" />
                      <div>
                           <a href="/Shop">Shop</a><a href="/Orders">Orders</a><a href="/Inventory">Inventory</a><a href="/About Us">About us</a> 
                      </div>  
                  </nav>
            </div>
      );
};

export default Header;