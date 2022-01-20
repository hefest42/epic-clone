import React from "react";

const HorizontalPoster = ({ game }) => {
    return (
        <div className="horizontal-poster">
            <div className="horizontal-poster__left">
                <img src={game.posterSmall} alt="" />
            </div>
            <div className="horizontal-poster__right"></div>
        </div>
    );
};

export default HorizontalPoster;
