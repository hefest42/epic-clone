import React from "react";

import PopularGenresCarousel from "./PopularGenresCarousel";
import GamesBrowseList from "./GamesBrowseList";

const BrowsePage = () => {
    return (
        <div className="browse">
            <PopularGenresCarousel />
            <GamesBrowseList />
        </div>
    );
};

export default BrowsePage;
