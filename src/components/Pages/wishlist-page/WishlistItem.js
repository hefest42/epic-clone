import React from "react";

import { useDispatch } from "react-redux";
import { removeGamesFromWishlist } from "../../../store/AccountSlice";

import { calcDiscount } from "../../../store/helperFunctions";

const WishlistItem = ({ game }) => {
    const dispatch = useDispatch();

    const removeGamesFromWishlistHandler = () => {
        dispatch(removeGamesFromWishlist(game));
    };

    return (
        <div className="wishlistItem centered">
            <div className="wishlistItem-inner space-between">
                <div className="wishlistItem-inner__left">
                    <img src={game.posterSmall} alt="" />
                </div>

                <div className="wishlistItem-inner__right">
                    <div className="wishlistItem-inner__right-title space-between">
                        <h3>{game.name}</h3>

                        {!game.gameOnSale ? (
                            <div>${game.price}</div>
                        ) : (
                            <div style={{ width: "auto" }} className="game-on-sale">
                                <span>-{game.discount}%</span>
                                <span>${game.price}</span>
                                <span>${calcDiscount(game.price, game.discount).toFixed(2)}</span>
                            </div>
                        )}
                    </div>

                    <div className="wishlistItem-inner__right-buttons space-between">
                        <div></div>
                        <div className="centered">
                            <p onClick={removeGamesFromWishlistHandler}>Remove</p>
                            <button>ADD TO CART</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WishlistItem;
