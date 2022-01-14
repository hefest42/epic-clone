import React, { useState } from "react";

import PosterBig from "../../UI/PosterBig";

import { HERO_GAMES } from "../../../dummy-server/DUMMY_GAMES";

const MainCarousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    return (
        <div className="main-carousel">
            <div className="main-carousel__left">
                <PosterBig type="main" poster={HERO_GAMES[0].posterBig} index="0" slideNumber={currentSlide} />
                <PosterBig type="main" poster={HERO_GAMES[1].posterBig} index="1" slideNumber={currentSlide} />
            </div>
            <div className="main-carousel__right"></div>
        </div>
    );
};

export default MainCarousel;
