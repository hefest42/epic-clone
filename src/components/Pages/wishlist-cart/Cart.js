import React, { useState, useEffect } from "react";

import CartItem from "./CartItem";
import LogInWarning from "../../UI/LogInWarning";

import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { calcDiscount } from "../../../store/helperFunctions";

const Cart = () => {
    const navigate = useNavigate();
    const isLoggedIn = useSelector(state => state.loggedInAccount.loggedIn);
    const cartGames = useSelector(state => state.loggedInAccount.cart);
    const [totalPrice, setTotalPrice] = useState("0");

    useEffect(() => {
        if (!isLoggedIn) navigate("/log-in");

        let prices = 0;

        cartGames.forEach(game => {
            if (game.gameOnSale) prices = prices + calcDiscount(game.price, game.discount);
            else prices = prices + +game.price;
        });

        setTotalPrice(Number(prices).toFixed(2));
    }, [cartGames, isLoggedIn, navigate]);

    return (
        <div className="cart">
            <div className="cart-title">Cart</div>
            <div className="cart-inner">
                {cartGames.length === 0 ? (
                    <LogInWarning warning="There are no items in your Cart" />
                ) : (
                    <div className="cart-items">
                        <div className="cart-left">
                            {cartGames.map((game, i) => (
                                <CartItem key={i} game={game} />
                            ))}
                        </div>

                        <div className="cart-right">
                            <div className="cart-summary centered-column">
                                <div className="cart-summary__title">Games and Apps Summary</div>
                                <div className="cart-summary__top">
                                    <div className="cart-summary__price space-between">
                                        <p>Price</p>
                                        <p>{`$${totalPrice}`}</p>
                                    </div>
                                    <div className="cart-summary__taxes space-between">
                                        <p>Taxes</p>
                                        <p>Calculated at Checkout</p>
                                    </div>
                                </div>
                                <div className="cart-summary__bottom">
                                    <div className="cart-summary__total space-between">
                                        <p>Subtotal</p>
                                        <p>{`$${totalPrice}`}</p>
                                    </div>
                                    <button className="cart-summary__button">CHECK OUT</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Cart;
