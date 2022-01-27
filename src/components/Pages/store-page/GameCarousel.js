import React, { useState } from "react";

import { Link } from "react-router-dom";

import { calcDiscount, calcPercentage } from "../../../store/helperFunctions";

// FIX THE CAROUSEL MOVEMENT
// 243.2
// 6.25%
const GameCarousel = ({ title, games }) => {
    const [showWishlistButton, setShowWishlistButton] = useState(false);
    const [posterWidth, setPosterWidth] = useState(calcPercentage(243.2, games.length * 243.2));
    const [posterNumber, setPosterNumber] = useState(0);
    const [posterMovementAmount, setPosterMovementAmount] = useState(0);

    const moveCarouselRight = () => {
        if (Math.ceil(games.length / 6) - 1 === posterMovementAmount) return;

        if (Math.floor(games.length / 6) - 1 === posterMovementAmount) {
            setPosterNumber(state => state + (games.length - 6 * (posterMovementAmount + 1)));

            setPosterMovementAmount(state => state + 1);
        } else {
            setPosterMovementAmount(state => state + 1);

            setPosterNumber(state => state + 6);
        }
    };

    const moveCarouselLeft = () => {
        setPosterMovementAmount(state => state - 1);
        setPosterNumber(state => state - 6);
    };

    console.log(posterMovementAmount, posterNumber);

    return (
        <section className="game-carousel">
            <div className="game-carousel__title">
                <div className="game-carousel__title-left">
                    <h3>{title}</h3>
                    <span>&#x203A;</span>
                </div>
                <div className="game-carousel__title-right">
                    <button onClick={moveCarouselLeft}>&#x2039;</button>
                    <button onClick={moveCarouselRight}>&#x203A;</button>
                </div>
            </div>

            <div className="game-carousel__container" style={{ transform: `translateX(-${posterWidth * posterNumber}%)` }}>
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
