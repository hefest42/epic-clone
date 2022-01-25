import React from "react";

const HorizontalPoster = ({ game, showPrice, index, posterNumber }) => {
    return (
        <div className="horizontal-poster">
            <div className="horizontal-poster__left">
                <img src={game.posterSmall} alt="" />
                {index === posterNumber && (
                    <div className="poster-cover__white">
                        <button>+</button>
                    </div>
                )}
            </div>

            <div className="horizontal-poster__right">
                <span>{game.name}</span>
                {showPrice && <span>{game.price}</span>}
            </div>
        </div>
    );
};

export default HorizontalPoster;
