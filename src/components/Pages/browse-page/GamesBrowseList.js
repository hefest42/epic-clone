import React from "react";

import GamesBrowseFilters from "./GamesBrowseFilters";

import { Link } from "react-router-dom";

import { calcDiscount } from "../../../store/helperFunctions";
import { GAMES } from "../../../dummy-server/DUMMY_GAMES";
import { useState } from "react/cjs/react.development";

const GamesBrowseList = () => {
    const [showWishlistButton, setShowWishlistButton] = useState(false);
    const [showDropdownMenu, setShowDropdownMenu] = useState(false);

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
                    {GAMES.map((game, i) => (
                        <Link key={i} to={`/p/${game.name.replace(":", "").split(" ").join("-").toLowerCase()}`}>
                            <div
                                className="game-carousel__poster"
                                onMouseEnter={() => setShowWishlistButton(i)}
                                onMouseLeave={() => setShowWishlistButton(100)}
                            >
                                <div className="game-carousel__poster-top">
                                    <img src={game.posterSmall} alt={`${game.name} poster`} />
                                    <div className="poster-cover__white">{showWishlistButton === i && <button>+</button>}</div>
                                </div>

                                <div className="game-carousel__poster-bottom">
                                    <h4>{game.name}</h4>
                                    <div>
                                        {game.gameOnSale ? (
                                            <div className="game-on-sale">
                                                <span>-{game.discount}%</span>
                                                <span>${game.price}</span>
                                                <span>${calcDiscount(game.price, game.discount).toFixed(2)}</span>
                                            </div>
                                        ) : (
                                            <h4 className="game-not-on-sale">{game.price ? `$${game.price}` : "Free"}</h4>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="browseList-games__filters">
                    <GamesBrowseFilters size={"big"} />
                </div>
            </div>
        </section>
    );
};

export default GamesBrowseList;
