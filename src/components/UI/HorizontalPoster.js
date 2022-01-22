import React from "react";

const HorizontalPoster = ({ game, showPrice }) => {
    return (
        <div className="horizontal-poster">
            <div className="horizontal-poster__left">
                <img src={game.posterSmall} alt="" />
            </div>

            <div className="horizontal-poster__right">
                <span>{game.name}</span>
                {showPrice && <span>{game.price}</span>}
            </div>
        </div>
    );
};

export default HorizontalPoster;
