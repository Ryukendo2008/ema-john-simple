import React from 'react';
import logo from '../../images/logo.png'
import './header.css'

const Header = () => {
          return (
                    <div className="header">
                              <img src={logo} />
                              <nav>
                                        <a href="/shop">Shop</a>
                                        <a href="/review">Order Review</a>
                                        <a href="/manage">Manage Inventory</a>
                              </nav>
                              <div className="input-div">
                                        <input placeholder="type here to search" className="input" type="search"></input>
                              </div>
                    </div>
          );
};

export default Header;