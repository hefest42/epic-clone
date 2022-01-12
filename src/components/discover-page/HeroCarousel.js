import React from "react";

import { HERO_GAMES } from "../../dummy-server/DUMMY_GAMES";

const HeroCarousel = () => {
    return (
        <div className="hero-container">
            <div className="hero-left">
                {HERO_GAMES.map((game, i) => {
                    return (
                        <div className="poster-container">
                            <img src={game.posterBig} alt="" />
                        </div>
                    );
                })}
            </div>
            <div className="hero-right"></div>
        </div>
    );
};

export default HeroCarousel;
