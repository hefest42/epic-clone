import React from "react";

import godOfWarBigPoster from "../../../game-posters/hero-god-of-war-big.jpg";

const HeroCarousel = () => {
    return (
        <div className="hero-container">
            <div className="hero-left">
                <img src={godOfWarBigPoster} alt="" />
            </div>
            <div className="hero-right"></div>
        </div>
    );
};

export default HeroCarousel;
