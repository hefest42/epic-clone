import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";

// FIX THE CAROUSEL MOVEMENT
const GameCarousel = ({ title, games }) => {
    const [showWishlistButton, setShowWishlistButton] = useState(false);
    const [slideMovementAmount, setSlideMovementAmount] = useState(0);

    const calcDiscount = (price, discount) => {
        return (price * (100 - discount)) / 100;
    };

    return (
        <section className="game-carousel">
            <div className="game-carousel__title">
                <div className="game-carousel__title-left">
                    <h3>{title}</h3>
                    <span>&#x203A;</span>
                </div>
                <div className="game-carousel__title-right">
                    <button onClick={() => console.log("test")}>&#x2039;</button>
                    <button onClick={() => console.log("test")}>&#x203A;</button>
                </div>
            </div>

            <div className="game-carousel__container" style={{ transform: `translateX(${slideMovementAmount}%)` }}>
                {games.map((game, i) => (
                    <Link key={i} to={`p/${game.name.replace(":", "").split(" ").join("-").toLowerCase()}`}>
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
        </section>
    );
};

export default GameCarousel;
