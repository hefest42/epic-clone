import React from "react";

import PopularGenresCarousel from "./PopularGenresCarousel";
import GamesBrowseList from "./GamesBrowseList";
import Footer from "../../header-footer/Footer";

const BrowsePage = () => {
    return (
        <div className="browse">
            <PopularGenresCarousel />
            <GamesBrowseList />
            <Footer />
        </div>
    );
};

export default BrowsePage;
