import React from 'react';

const Cart = (props) => {

          // console.log(props.cart[0].shipping);

          const cart = props.cart;
          const total = cart.reduce((total, prd) => total + prd.price, 0);

          let shipping = 0;
          if (total > 35) {
                    shipping = 0;
          }
          else if (total > 15) {
                    shipping = 4.99;
          }
          else if (total > 0) {
                    shipping = 12.99;
          }

          const tax = (total / 10).toFixed(2);

          return (
                    <div>
                              <h4>Order Summery</h4>
                              <p>Items ordered : {cart.length}</p>

                              <div>
                                        <h5><small>Items : {(total).toFixed(2)}</small></h5>
                                        <h5><small>Shipping & Handling : {shipping}</small></h5>
                                        <h5><small>Tax + Vat : {tax}</small></h5>
                                        <h5><small>Total Price : {(shipping + total + Number(tax)).toFixed(2)}</small></h5>
                              </div>

                    </div>
          );
};

export default Cart;