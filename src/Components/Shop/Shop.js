import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
          const first30 = fakeData.slice(0, 30)
          const [products, setProducts] = useState(first30);
          const [cart, setCart] = useState([]);

          const handleAddProduct = (product) => {
                    // console.log(product);
                    const newCart = [...cart, product];
                    setCart(newCart);
          }

          return (
                    <div className="shop-container">
                              <div className="product-container">
                                        {
                                                  products.map(product => <Product handleAddProduct={handleAddProduct} product={product}></Product>)
                                        }

                              </div>
                              <div className="card-container">
                                        <Cart cart={cart}></Cart>
                              </div>
                    </div>
          );
};

export default Shop;