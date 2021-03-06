import React, { useState } from "react";

import GamesBrowseFilters from "./GamesBrowseFilters";

import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { addGamesToWishlist } from "../../../store/AccountSlice";

import { calcDiscount } from "../../../store/helperFunctions";
import { GAMES } from "../../../dummy-server/DUMMY_GAMES";

const GamesBrowseList = () => {
    const dispatch = useDispatch();
    const [showWishlistButton, setShowWishlistButton] = useState("");
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
