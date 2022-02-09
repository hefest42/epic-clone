import React, { useState } from "react";

const GamePageCarousel = ({ game }) => {
    const [showSliderButtons, setShowSliderButtons] = useState(false);

    return (
        <div className="gamePage-carousel">
            <div className="gamePage-carousel__top" onMouseEnter={() => setShowSliderButtons(true)} onMouseLeave={() => setShowSliderButtons(false)}>
                <img src={game.posterBig} alt="" />
                {showSliderButtons && <button className="gamePage-carousel__top-buttonLeft">{"<"}</button>}
                {showSliderButtons && <button className="gamePage-carousel__top-buttonRight">{">"}</button>}
            </div>

            <div className="gamePage-carousel__bottom space-between">
                <button className="centered">{"<"}</button>
                <div className="gamePage-carousel__bottom-images centered">
                    <img src={game.posterBig} alt="" />
                </div>
                <button className="centered">{">"}</button>
            </div>
        </div>
    );
};

export default GamePageCarousel;
