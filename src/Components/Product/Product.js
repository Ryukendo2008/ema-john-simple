import React from 'react';
import logo from '../../images/cart.svg';
import './Product.css'

const Product = (props) => {
          console.log(props.product);
          const { name, img, seller, price, stock } = props.product;
          return (
                    <div className="product">
                              <div className="pro-img">
                                        <img src={img} />
                              </div>
                              <div className="pro-info">
                                        <p className="pro-name">{name}</p>
                                        <p>by: {seller}</p>
                                        <h3 style={{ fontWeight: '400', }}>${price}</h3>
                                        <h4 style={{ fontWeight: '400', }}>only {stock} left in stock - order soon</h4>
                                        <button onClick={() => props.handleAddProduct(props.product)} className="main-btn"><img width="20px" src={logo} />  add to cart</button>
                              </div>
                    </div >
          );
};

export default Product;