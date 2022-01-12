import React, { useEffect } from "react";
import { useState } from "react/cjs/react.development";

import { HERO_GAMES } from "../../dummy-server/DUMMY_GAMES";

const HeroCarousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlideHandler = () => setCurrentSlide(currentSlide === HERO_GAMES.length - 1 ? 0 : currentSlide + 1); // Slides going forwards

    const prevSlideHandler = () => setCurrentSlide(currentSlide === 0 ? HERO_GAMES.length - 1 : currentSlide - 1); // Slides going backwards

    return (
        <div className="hero-container">
            <div className="hero-left">
                {HERO_GAMES.map((game, i) => {
                    return (
                        <div key={i} className="poster-container">
                            <img
                                style={{
                                    transform: `translateX(${(i - currentSlide) * 100}%)`,
                                }}
                                src={game.posterBig}
                                alt=""
                            />
                        </div>
                    );
                })}
            </div>

            <div className="hero-right"></div>
        </div>
    );
};

export default HeroCarousel;
