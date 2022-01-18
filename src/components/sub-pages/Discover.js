import React, { Fragment } from "react";

import MainCarousel from "./discover-components/MainCarousel";
import GamesCarousel from "./discover-components/GamesCarousel";
import FeaturedGames from "./discover-components/FeaturedGames";
import FreeGames from "./discover-components/FreeGames";
import NewTopComing from "./discover-components/NewTopComing";
import BrowseFeatureBottom from "./discover-components/BrowseFeatureBottom";

import { HERO_GAMES } from "../../dummy-server/DUMMY_GAMES";

const Discover = () => {
    const heroGames = HERO_GAMES.filter(game => game.gameFeatured === true);
    const gamesOnSale = HERO_GAMES.filter(game => game.gameOnSale === true);
    const newGames = HERO_GAMES.slice(2, 7);
    const topGames = HERO_GAMES.slice(8, 13);
    const comingGames = HERO_GAMES.slice(0, 5);

    return (
        <Fragment>
            <MainCarousel GAMES={heroGames} />
            <GamesCarousel title="Games On Sale" GAMES={gamesOnSale} />
            <FeaturedGames firstGame={HERO_GAMES[3]} secondGame={HERO_GAMES[2]} />
            <FreeGames GAMES={HERO_GAMES} />
            <NewTopComing GAMES={HERO_GAMES} newGames={newGames} topGames={topGames} comingGames={comingGames} />
            <FeaturedGames firstGame={HERO_GAMES[1]} secondGame={HERO_GAMES[4]} />
            <GamesCarousel title="Recently Updated" GAMES={HERO_GAMES} />
            <GamesCarousel title="Most Popular" GAMES={HERO_GAMES} />
            <BrowseFeatureBottom />
        </Fragment>
    );
};

export default Discover;
