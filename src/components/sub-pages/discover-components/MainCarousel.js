import React from "react";

import PosterBig from "../../UI/PosterBig";

import { HERO_GAMES } from "../../../dummy-server/DUMMY_GAMES";

const MainCarousel = () => {
    return (
        <div className="main-carousel">
            <div className="main-carousel__left">
                <PosterBig type="main" poster={HERO_GAMES[0].posterBig} />
            </div>
            <div className="main-carousel__right"></div>
        </div>
    );
};

export default MainCarousel;
