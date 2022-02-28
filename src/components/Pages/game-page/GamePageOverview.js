import React, { useState } from "react";

import GamePageCarousel from "./GamePageCarousel";
import GamePageInformation from "./GamePageInformation";

import { useDispatch } from "react-redux";
import { addGamesToWishlist, addGamesToCart } from "../../../store/AccountSlice";

const GamePageOverview = ({ game }) => {
    const dispatch = useDispatch();
    const gameReleaseDate = new Date(game.releaseDate);
    const [showMore, setShowMore] = useState(true);

    return (
        <div
            className="gamePage-overview"
            style={{
                height: `${showMore ? "" : "60rem"}`,
            }}
        >
            <div className="gamePage-overview__left">
                <GamePageCarousel game={game} />
                <GamePageInformation game={game} />
                <button className="gamePage-overview__left-showMore" onClick={() => setShowMore(state => !state)}>
                    {!showMore ? "Show More" : "Show Less"}
                </button>
            </div>

            <div className="gamePage-overview__right">
                <div className="gamePage-overview__right-details">
                    <div className="gamePage-overview__right-details-logo centered">LOGO</div>
                    <div className="gamePage-overview__right-details-price">${game.price}</div>
                    <button className="gamePage-overview__right-details-buy">BUY NOW</button>
                    <button className="gamePage-overview__right-details-cart" onClick={() => dispatch(addGamesToCart(game))}>
                        ADD TO CART
                    </button>
                    <button className="gamePage-overview__right-details-wishlist" onClick={() => dispatch(addGamesToWishlist(game))}>
                        <span>+</span> ADD TO WISHLIST
                    </button>
                    <div className="gamePage-overview__right-details-studio">
                        <span>Developer</span>
                        <div>{game.studio}</div>
                    </div>
                    <div className="gamePage-overview__right-details-studio">
                        <span>Publisher</span>
                        <div>{game.studio}</div>
                    </div>
                    <div className="gamePage-overview__right-details-studio">
                        <span>Release Date</span>
                        <div>{`${gameReleaseDate.getDate()}/${gameReleaseDate.getMonth() + 1}/${gameReleaseDate.getFullYear()}`}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GamePageOverview;
