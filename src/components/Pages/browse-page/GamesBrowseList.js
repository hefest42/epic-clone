import React, { useState, useEffect } from "react";

import GamesBrowseFilters from "./GamesBrowseFilters";

import { Link, useLocation } from "react-router-dom";

import { useDispatch } from "react-redux";
import { addGamesToWishlist } from "../../../store/AccountSlice";

import { calcDiscount, compareTwoArrays } from "../../../store/helperFunctions";
import { GAMES } from "../../../dummy-server/DUMMY_GAMES";

const GamesBrowseList = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    const [showWishlistButton, setShowWishlistButton] = useState("");
    const [showDropdownMenu, setShowDropdownMenu] = useState(false);
    const [filteredGames, setFilteredGames] = useState([]);

    useEffect(() => {
        if (location.search === "") {
            setFilteredGames(GAMES);

            return;
        }

        //* getting the search input query
        const searchQueryString = location.search.split("&")[0].split("=")[1];
        const gamesFilteredBySearchQuery = GAMES.filter(game => game.name.replace(/[\s:]/g, "").toLowerCase().includes(searchQueryString));

        //* user selected genres from the sidebar
        const selectedGenres = location.search
            .split("&")
            .map(string => string.split("=")[1])
            .map(string => {
                if (string.includes("+")) return string.replace("+", " ");
                else return string;
            });

        if (location.search.includes("q=")) {
            console.log("TEST");

            if (selectedGenres.slice(1).length === 0) {
                setFilteredGames(gamesFilteredBySearchQuery);

                return;
            } else {
                const queryGamesFilteredByGenre = gamesFilteredBySearchQuery.filter(game => compareTwoArrays(game.genres, selectedGenres.slice(1)));

                setFilteredGames(queryGamesFilteredByGenre);

                return;
            }
        }

        //* comparring game genre array with the user selected genres, and returning the appropriate games
        const gamesFilteredByGenre = GAMES.filter(game => compareTwoArrays(game.genres, selectedGenres));

        setFilteredGames(gamesFilteredByGenre);
    }, [location.search]);

    return (
        <section className="browseList">
            <div className="browseList-buttons space-between">
                <div className="browseList-buttons__left">
                    <button className="centered" onClick={() => setShowDropdownMenu(state => !state)}>
                        <span>Sort By:</span>
                        <span>{` New Releases`}</span>
                        <div
                            style={{
                                transform: `rotate(${showDropdownMenu ? "-90deg" : "90deg"})`,
                            }}
                        >
                            {">"}
                        </div>
                    </button>
                    {showDropdownMenu && (
                        <div className="browseList-buttons__dropdown">
                            <button>Relevance</button>
                            <button>New Release</button>
                            <button>Coming Soon</button>
                            <button>Alphabetical</button>
                            <button>Price: Low to High</button>
                            <button>Price: High to Low</button>
                        </div>
                    )}
                </div>

                <div className="browseList-buttons__right space-between">
                    <button>{`Filters`}</button>
                    <button>RESET</button>
                </div>
            </div>

            <div className="browseList-games">
                <div className="browseList-games__list">
                    {filteredGames.map((game, i) => (
                        <div key={i} className="browseList-game">
                            <Link to={`/store/p/${game.name.replace(":", "").split(" ").join("-").toLowerCase()}`}>
                                <div className="game-carousel__item-image">
                                    <img src={game.posterSmall} alt={`${game.name} poster`} />
                                    <div
                                        className="poster-cover__white"
                                        onMouseEnter={() => setShowWishlistButton(i)}
                                        onMouseLeave={() => setShowWishlistButton(-1)}
                                    ></div>
                                </div>

                                <h4>{game.name}</h4>
                                {game.gameOnSale ? (
                                    <div className="game-on-sale">
                                        <span>{`-${game.discount}%`}</span>
                                        <span>{`$${game.price}`}</span>
                                        <span>{`$${calcDiscount(game.price, game.discount).toFixed(2)}`}</span>
                                    </div>
                                ) : (
                                    <div className="game-not-on-sale">{game.price ? `$${game.price}` : "Free"}</div>
                                )}
                            </Link>

                            {showWishlistButton === i && (
                                <button
                                    className="wishlist-button__small"
                                    style={{
                                        top: "3%",
                                        right: "3%",
                                    }}
                                    onMouseEnter={() => setShowWishlistButton(i)}
                                    onMouseLeave={() => setShowWishlistButton(-1)}
                                    onClick={() => dispatch(addGamesToWishlist(game))}
                                >
                                    +
                                </button>
                            )}
                        </div>
                    ))}
                </div>

                <div className="browseList-games__filters">
                    <GamesBrowseFilters />
                </div>
            </div>
        </section>
    );
};

export default GamesBrowseList;
