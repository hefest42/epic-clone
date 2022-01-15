import React from "react";

import BuyNowButton from "./BuyNowButton";
import WishlistButton from "./WishlistButton";

const PosterBig = ({ type, game, index, slideNumber }) => {
    const currentDate = new Date();
    const gameReleaseDate = new Date(game.releaseDate);
    const dateCheck = currentDate > gameReleaseDate;

    switch (type) {
        case "main":
            return (
                <div
                    className="poster-big poster-big__main"
                    style={{
                        transform: `translateX(${(+index - slideNumber) * 100}%)`,
                    }}
                >
                    <img src={game.posterBig} alt="poster" />

                    <div className="poster-big__cover">
                        <div className="poster-big__information">
                            <div className="poster-big__information-top">
                                <h4>{dateCheck ? "Out Now" : `Coming ${gameReleaseDate.getDate()}/${gameReleaseDate.getMonth() + 1}`}</h4>
                                <p>{game.shortDescription}</p>
                            </div>
                            <div className="poster-big__information-bottom">
                                <BuyNowButton text={dateCheck ? "BUY NOW" : "PRE-PURCHASE NOW"} />
                                <WishlistButton type="big" />
                            </div>
                        </div>
                    </div>
                </div>
            );

        case "featured":
            return (
                <div className="poster-big">
                    <img src={game.posterBig} alt="poster" />
                </div>
            );
        default:
            return null;
    }
};

export default PosterBig;
