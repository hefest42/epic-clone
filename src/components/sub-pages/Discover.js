import React, { Fragment } from "react";

import MainCarousel from "./discover-components/MainCarousel";
import GamesCarousel from "./discover-components/GamesCarousel";

const Discover = () => {
    return (
        <Fragment>
            <MainCarousel />
            <GamesCarousel title="Games On Sale" />
        </Fragment>
    );
};

export default Discover;
