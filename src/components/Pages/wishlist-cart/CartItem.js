import React from "react";

import { useDispatch } from "react-redux";
import { removeGamesFromCart, moveGamesToWishlist } from "../../../store/AccountSlice";
import { calcDiscount } from "../../../store/helperFunctions";

const CartItem = ({ game }) => {
    const dispatch = useDispatch();

    return (
        <div className="cartItem centered">
            <div className="cartItem-inner centered">
                <div className="cartItem-image">
                    <img src={game.posterSmall} alt={`${game.name} poster`} />
                </div>
                <div className="cartItem-information">
                    <div className="cartItem-information__name space-between">
                        <div>{game.name}</div>
                        <div>
                            {game.gameOnSale ? (
                                <div className="game-on-sale">
                                    <span>%{game.discount}</span>
                                    <span>${game.price}</span>
                                    <span>${calcDiscount(game.price, game.discount).toFixed(2)}</span>
                                </div>
                            ) : (
                                <div>${game.price}</div>
                            )}
                        </div>
                    </div>
                    <div className="cartItem-information__buttons space-between">
                        <div></div>
                        <div>
                            <button onClick={() => dispatch(moveGamesToWishlist(game))}>Move to wishlist</button>
                            <button onClick={() => dispatch(removeGamesFromCart(game))}>Remove</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
