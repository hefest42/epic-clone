import React, { useEffect, useState } from "react";

import Poster from "../../UI/Poster";
import HorizontalPoster from "../../UI/HorizontalPoster";

import { GAMES } from "../../../dummy-server/DUMMY_GAMES";

const HeroCarousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const heroGames = GAMES.filter(game => game.gameFeatured === true);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide(currentSlide === heroGames.length - 1 ? 0 : currentSlide + 1);
        }, 7000);

        return () => clearInterval(timer);
    }, [currentSlide, heroGames.length]);

    return (
        <section className="hero">
            <div className="hero-left">
                {heroGames.map((game, i) => (
                    <Poster key={i} poster={game.posterBig} index={i} slideNumber={currentSlide} />
                ))}
            </div>

            <div className="hero-right">
                {heroGames.map((game, i) => (
                    <div
                        key={i}
                        className={i === currentSlide ? "hero-right__container hero-active" : "hero-right__container"}
                        style={{
                            backgroundColor: `${i === currentSlide ? "#2a2a2a8f" : ""}`,
                        }}
                        onClick={() => setCurrentSlide(i)}
                    >
                        <HorizontalPoster game={game} showPrice={false} index={i} />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default HeroCarousel;
