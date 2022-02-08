import React, { useState } from "react";

import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { addGamesToWishlist } from "../../../store/AccountSlice";

import { calcDiscount, calcPercentage } from "../../../store/helperFunctions";

// FIX THE CAROUSEL MOVEMENT
// 243.2
// 6.25%
const GameCarousel = ({ title, games }) => {
    const dispatch = useDispatch();
    const [showWishlistButton, setShowWishlistButton] = useState("");
    const [posterWidth, setPosterWidth] = useState(calcPercentage(243.2, games.length * 243.2));
    const [posterNumber, setPosterNumber] = useState(0);
    const [slideNumber, setSlideNumber] = useState(0);

    const moveCarouselRight = () => {
        if (Math.ceil(games.length / 6) - 1 === slideNumber) return;

        if (Math.floor(games.length / 6) - 1 === slideNumber) {
            setPosterNumber(state => state + (games.length - 6 * (slideNumber + 1)));

            setSlideNumber(state => state + 1);
        } else {
            setSlideNumber(state => state + 1);

            setPosterNumber(state => state + 6);
        }
    };

    const moveCarouselLeft = () => {
        if (Math.ceil(games.length / 6) - 1 === slideNumber) {
            setPosterNumber(state => state - (games.length - 6 * slideNumber));
            setSlideNumber(state => state - 1);
        }

        if (slideNumber > 0 && slideNumber < Math.ceil(games.length / 6) - 1) {
            setSlideNumber(state => state - 1);
            setPosterNumber(state => state - 6);
        }
    };

    return (
        <section className="game-carousel">
            <div className="game-carousel__title">
                <div className="game-carousel__title-left centered">
                    <h3>{title}</h3>
                    <span>&#x203A;</span>
                </div>
                <div className="game-carousel__title-right centered">
                    <button className="carousel-button" onClick={moveCarouselLeft}>
                        &#x2039;
                    </button>
                    <button className="carousel-button" onClick={moveCarouselRight}>
                        &#x203A;
                    </button>
                </div>
            </div>

            <div className="game-carousel__container " style={{ transform: `translateX(-${posterWidth * posterNumber}%)` }}>
                {games.map((game, i) => (
                    <div key={i} style={{ position: "relative" }}>
                        <Link to={`p/${game.name.replace(":", "").split(" ").join("-").toLowerCase()}`}>
                            <div className="game-carousel__item">
                                <div className="game-carousel__item-image">
                                    <img src={game.posterSmall} alt="" />
                                    <div
                                        className="poster-cover__white"
                                        onMouseEnter={() => setShowWishlistButton(i)}
                                        onMouseLeave={() => setShowWishlistButton(1000)}
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
                            </div>
                        </Link>

                        {showWishlistButton === i ? (
                            <button
                                className="wishlist-button__small"
                                onMouseEnter={() => setShowWishlistButton(i)}
                                onMouseLeave={() => setShowWishlistButton(1000)}
                                onClick={() => dispatch(addGamesToWishlist(game))}
                            >
                                +
                            </button>
                        ) : (
                            ""
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default GameCarousel;
