import React, { useState } from "react";

import PosterBig from "../../UI/PosterBig";
import PosterSmall from "../../UI/PosterSmall";

const MainCarousel = ({ GAMES }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    return (
        <div className="main-carousel">
            <div className="main-carousel__left">
                {GAMES.map((game, i) => (
                    <PosterBig key={i} type="main" game={game} index={i} slideNumber={currentSlide} />
                ))}
            </div>
            <div className="main-carousel__right">
                {GAMES.map((game, i) => (
                    <PosterSmall key={i} type="hero" game={game} index={i} slideNumber={currentSlide} />
                ))}
            </div>
        </div>
    );
};

export default MainCarousel;
