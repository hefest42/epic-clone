import React, { useState } from "react";

import Poster from "../../UI/Poster";

import { GAMES } from "../../../dummy-server/DUMMY_GAMES";

const HeroCarousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const heroGames = GAMES.filter(game => game.gameFeatured === true);

    return (
        <section className="hero">
            <div className="hero-left">
                {heroGames.map((game, i) => (
                    <Poster key={i} poster={game.posterBig} index={i} slideNumber={currentSlide} />
                ))}
            </div>
            <div className="hero-right"></div>
        </section>
    );
};

export default HeroCarousel;
