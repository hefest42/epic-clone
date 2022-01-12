import React, { useState, useEffect } from "react";

import { HERO_GAMES } from "../../dummy-server/DUMMY_GAMES";

// const nextSlideHandler = () => setCurrentSlide(currentSlide === HERO_GAMES.length - 1 ? 0 : currentSlide + 1); // Slides going forwards

const HeroCarousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    return (
        <div className="hero-container">
            <div className="hero-left">
                {HERO_GAMES.map((game, i) => {
                    return (
                        <div
                            key={i}
                            className="poster-container"
                            style={{
                                transform: `translateX(${(i - currentSlide) * 100}%)`,
                            }}
                        >
                            <img src={game.posterBig} alt={`${game.name} poster`} />
                        </div>
                    );
                })}
            </div>

            <div className="hero-right">
                {HERO_GAMES.map((game, i) => {
                    return (
                        <div
                            className={i === currentSlide ? "active-poster active-poster-fill" : ""}
                            key={i}
                            onClick={() => setCurrentSlide(i)}
                        >
                            <div>
                                <img src={game.posterSmall} alt={`${game.name} poster`} />
                                <p>{game.name}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default HeroCarousel;
