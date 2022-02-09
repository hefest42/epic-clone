import React, { useState } from "react";

import GamePageCarousel from "./GamePageCarousel";
import GamePageInformation from "./GamePageInformation";

const GamePageOverview = ({ game }) => {
    const gameReleaseDate = new Date(game.releaseDate);
    const [showMore, setShowMore] = useState(true);

    return (
        <div
            className="gamePage-overview"
            style={{
                height: `${showMore ? "" : "25rem"}`,
            }}
        >
            <div className="gamePage-overview__left">
                <GamePageCarousel game={game} />
                <GamePageInformation game={game} />
            </div>

            <div className="gamePage-overview__right">
                <div className="gamePage-overview__right-details">
                    <div className="gamePage-overview__right-details-logo centered">LOGO</div>
                    <div className="gamePage-overview__right-details-price">${game.price}</div>
                    <button className="gamePage-overview__right-details-buy">BUY NOW</button>
                    <button className="gamePage-overview__right-details-cart">ADD TO CART</button>
                    <button className="gamePage-overview__right-details-wishlist">
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
