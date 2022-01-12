import React from "react";
import { useState } from "react/cjs/react.development";

import { HERO_GAMES } from "../../dummy-server/DUMMY_GAMES";

const HeroCarousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlideHandler = () => {
        setCurrentSlide(state => state + 1);
    };

    const prevSlideHandler = () => {
        setCurrentSlide(state => state - 1);
    };

    return (
        <div className="hero-container">
            <div className="hero-left">
                {HERO_GAMES.map((game, i) => {
                    return (
                        <div className="poster-container">
                            <img
                                key={i}
                                style={{
                                    transform: `translateX(${(i - currentSlide) * 100}%)`,
                                }}
                                src={game.posterBig}
                                alt=""
                            />
                        </div>
                    );
                })}

                <div className="button-container">
                    <button onClick={prevSlideHandler}>LEFT</button>
                    <button onClick={nextSlideHandler}>RIGHT</button>
                </div>
            </div>
            <div className="hero-right"></div>
        </div>
    );
};

export default HeroCarousel;
