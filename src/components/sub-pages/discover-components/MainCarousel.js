import React, { useState } from "react";

import PosterBig from "../../UI/PosterBig";

import { HERO_GAMES } from "../../../dummy-server/DUMMY_GAMES";

const MainCarousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    return (
        <div className="main-carousel">
            <div className="main-carousel__left">
                {HERO_GAMES.map((game, i) => (
                    <PosterBig type="main" poster={game.posterBig} index={i} slideNumber={currentSlide} />
                ))}
            </div>
            <div className="main-carousel__right"></div>
        </div>
    );
};

export default MainCarousel;
