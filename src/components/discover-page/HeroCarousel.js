import React, { useEffect } from "react";
import { useState } from "react/cjs/react.development";

import { HERO_GAMES } from "../../dummy-server/DUMMY_GAMES";

// const nextSlideHandler = () => setCurrentSlide(currentSlide === HERO_GAMES.length - 1 ? 0 : currentSlide + 1); // Slides going forwards

const HeroCarousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

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

            <div className="hero-right">
                {HERO_GAMES.map((game, i) => {
                    return (
                        <div onClick={() => setCurrentSlide(i)}>
                            <div>
                                <img src={game.posterSmall} alt="" />
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
