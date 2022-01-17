import React, { Fragment } from "react";

import MainCarousel from "./discover-components/MainCarousel";
import GamesCarousel from "./discover-components/GamesCarousel";
import FeaturedGames from "./discover-components/FeaturedGames";
import FreeGames from "./discover-components/FreeGames";

import { GAMES_ON_SALE, HERO_GAMES } from "../../dummy-server/DUMMY_GAMES";

const Discover = () => {
    return (
        <Fragment>
            <MainCarousel GAMES={HERO_GAMES} />
            <GamesCarousel title="Games On Sale" GAMES={GAMES_ON_SALE} />
            <FeaturedGames GAMES={HERO_GAMES} />
            <FreeGames GAMES={HERO_GAMES} />
        </Fragment>
    );
};

export default Discover;
