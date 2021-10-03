import React from 'react';
import './Product.css'

const Product = (props) => {
          return (
                    <div className="product">
                              <div className="pro-img">
                                        <img src={props.product.img}></img>
                              </div>
                              <div className="pro-info">
                                        <h3>{props.product.name}</h3>
                              </div>
                    </div>
          );
};

export default Product;