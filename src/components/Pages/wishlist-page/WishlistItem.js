import React from "react";

import { calcDiscount } from "../../../store/helperFunctions";

const WishlistItem = ({ game }) => {
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
                            <p>Remove</p>
                            <button>ADD TO CART</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WishlistItem;
