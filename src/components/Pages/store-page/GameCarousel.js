import React, { useState } from "react";

import { Link } from "react-router-dom";

// FIX THE CAROUSEL MOVEMENT
// 243.2
const GameCarousel = ({ title, games }) => {
    const [showWishlistButton, setShowWishlistButton] = useState(false);
    const [slideMovementAmount, setSlideMovementAmount] = useState(0);
    const [slideNumber, setSlideNumber] = useState(1);

    const calcDiscount = (price, discount) => {
        return (price * (100 - discount)) / 100;
    };

    const moveCarouselRight = () => {
        let posters = 6 * slideNumber;

        if (posters > games.length) return;

        setSlideNumber(state => state + 1);

        if (games.length - posters < 6) {
            setSlideMovementAmount(state => state + -243.2 * (games.length - posters));

            return;
        }

        if (games.length > posters) {
            setSlideMovementAmount(-243.2 * posters);
        }
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
                    <button onClick={moveCarouselRight}>&#x203A;</button>
                </div>
            </div>

            <div className="game-carousel__container" style={{ transform: `translateX(${slideMovementAmount}px)` }}>
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
