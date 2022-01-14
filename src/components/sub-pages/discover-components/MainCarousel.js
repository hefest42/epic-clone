import React from "react";

import { HERO_GAMES } from "../../../dummy-server/DUMMY_GAMES";

const MainCarousel = () => {
    return (
        <div className="main-carousel">
            <div className="main-carousel__left">
                <div>
                    <img src={HERO_GAMES[0].posterBig} alt="poster" />
                </div>
            </div>
            <div className="main-carousel__right"></div>
        </div>
    );
};

export default MainCarousel;
