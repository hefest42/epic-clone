import React from "react";

import HeroCarousel from "./HeroCarousel";
import GameCarousel from "./GameCarousel";

const DiscoverPage = () => {
    return (
        <div className="discover-container">
            <HeroCarousel />
            <GameCarousel />
        </div>
    );
};

export default DiscoverPage;
