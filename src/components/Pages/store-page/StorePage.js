import React, { Fragment } from "react";

import { Routes, Route } from "react-router-dom";

import Header from "../../header-footer/Header";
import SubHeader from "../../header-footer/SubHeader";
import HeroCarousel from "./HeroCarousel";
import GameCarousel from "./GameCarousel";

import { GAMES } from "../../../dummy-server/DUMMY_GAMES";

const StorePage = () => {
    const heroGames = GAMES.filter(game => game.gameFeatured === true);
    const gamesOnSale = GAMES.filter(game => game.gameOnSale === true);

    return (
        <Fragment>
            <Header />

            <Routes>
                <Route
                    path=""
                    element={
                        <div className="store">
                            <SubHeader />
                            <HeroCarousel games={heroGames} />
                            <GameCarousel games={gamesOnSale} />
                        </div>
                    }
                />
            </Routes>
        </Fragment>
    );
};

export default StorePage;
