import React from "react";

import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Cart = () => {
    const navigate = useNavigate();
    const isLoggedIn = useSelector(state => state.loggedInAccount.loggedIn);

    return (
        <div className="cart">
            <div className="cart-title">My Cart</div>
            <div className="cart-items centered">
                <div className="cart-left"></div>

                <div className="cart-right">
                    <div className="cart-summary centered-column">
                        <div className="cart-summary__title">Games and Apps Summary</div>
                        <div className="cart-summary__top">
                            <div className="cart-summary__price space-between">
                                <p>Price</p>
                                <p>$39.99</p>
                            </div>
                            <div className="cart-summary__taxes space-between">
                                <p>Taxes</p>
                                <p>Calculated at Checkout</p>
                            </div>
                        </div>
                        <div className="cart-summary__bottom">
                            <div className="cart-summary__total space-between">
                                <p>Subtotal</p>
                                <p>$50.99</p>
                            </div>
                            <button className="cart-summary__button">CHECK OUT</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
