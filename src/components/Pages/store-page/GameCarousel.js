import React, { useState } from "react";

const GameCarousel = ({ games }) => {
    const [moveCarouselByAmount, setMoveCarouselByAmount] = useState(0);

    const calcDiscount = (price, discount) => {
        return (price * (100 - discount)) / 100;
    };

    const moveCarouselRight = () => {
        const amount = games.length % 6;

        if (amount <= 6) {
            setMoveCarouselByAmount(-amount * 15);
        }

        console.log(amount);
        console.log(moveCarouselByAmount);
    };

    const moveCarouselLeft = () => {
        if (moveCarouselByAmount <= 6) setMoveCarouselByAmount(0);
    };

    return (
        <section className="game-carousel">
            <div className="game-carousel__title">
                <div className="game-carousel__title-left">
                    <h3>Games On sale</h3>
                    <span>&#x203A;</span>
                </div>
                <div className="game-carousel__title-right">
                    <button onClick={moveCarouselLeft}>&#x2039;</button>
                    <button onClick={moveCarouselRight}>&#x203A;</button>
                </div>
            </div>

            <div className="game-carousel__container" style={{ transform: `translateX(${moveCarouselByAmount}rem)` }}>
                {games.map((game, i) => (
                    <div className="game-carousel__poster" key={i}>
                        <div className="game-carousel__poster-top">
                            <img src={game.posterSmall} alt={`${game.name} poster`} />
                        </div>

                        <div className="game-carousel__poster-bottom">
                            <h4>{game.name}</h4>
                            <div>
                                <span>-{game.discount}%</span>
                                <span>${game.price}</span>
                                <span>${calcDiscount(game.price, game.discount).toFixed(2)}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default GameCarousel;
