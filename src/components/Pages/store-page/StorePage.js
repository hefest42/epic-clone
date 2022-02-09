import React, { Fragment } from "react";

import { Routes, Route } from "react-router-dom";

import Container from "../../UI/Container";
import Header from "../../header-footer/Header";
import SubHeader from "../../header-footer/SubHeader";
import HeroCarousel from "./HeroCarousel";
import GameCarousel from "./GameCarousel";
import FeaturedGames from "./FeaturedGames";
import FreeGames from "./FreeGames";
import NewTopComing from "./NewTopComing";
import DiscoverBottomFeature from "./DiscoverBottomFeature";
import Footer from "../../header-footer/Footer";
import GamePage from "../game-page/GamePage";

import BrowsePage from "../browse-page/BrowsePage";
import WishlistPage from "../wishlist-page/WishlistPage";

import { GAMES } from "../../../dummy-server/DUMMY_GAMES";

const StorePage = () => {
    const heroGames = GAMES.filter(game => game.gameFeatured === true);
    const gamesOnSale = GAMES.filter(game => game.gameOnSale === true);
    const newGames = GAMES.slice(0, 5);
    const topGames = GAMES.slice(5, 10);
    const comingGames = GAMES.slice(2, 7);

    return (
        <Container>
            <Header />

            <section>
                <SubHeader />

                <Routes>
                    <Route
                        path=""
                        element={
                            <div className="store">
                                <HeroCarousel games={heroGames} />
                                <GameCarousel title="Games On Sale" games={gamesOnSale} />
                                <FeaturedGames
                                    firstGame={GAMES.find(game => game.name === "STRANGER OF PARADISE FINAL FANTASY ORIGIN")}
                                    secondGame={GAMES.find(game => game.name === "Rocket League")}
                                />
                                <FreeGames
                                    firstGame={GAMES.find(game => game.name === "Sifu")}
                                    secondGame={GAMES.find(game => game.name === "Rainbow Six: Extraction")}
                                />
                                <NewTopComing newReleases={newGames} topSellers={topGames} comingSoon={comingGames} />
                                <FeaturedGames
                                    firstGame={GAMES.find(game => game.name === "God of War")}
                                    secondGame={GAMES.find(game => game.name === "Far Cry 6")}
                                />
                                <GameCarousel title="Recently Updated" games={GAMES.slice().sort((a, b) => a.name.localeCompare(b.name))} />
                                <GameCarousel title="Most Popular" games={GAMES.slice().sort((a, b) => a.price - b.price)} />
                                <DiscoverBottomFeature />
                            </div>
                        }
                    />
                    <Route path="/browse" element={<BrowsePage />} />
                    <Route path="/wishlist" element={<WishlistPage />} />
                    <Route path="/p/:game" element={<GamePage />} />
                </Routes>
            </section>
            <Footer />
        </Container>
    );
};

export default StorePage;
