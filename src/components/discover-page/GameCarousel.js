import React from "react";

import MediumPoster from "./MediumPoster";

import { GAMES_ON_SALE } from "../../dummy-server/DUMMY_GAMES";

const GameCarousel = () => {
    return (
        <div className="game-carousel__container">
            <div className="game-carousel__top">
                <div className="game-carousel__title">
                    <h3>Games On Sale</h3>
                    <span>{">"}</span>
                </div>

                <div className="game-carousel__buttons">
                    <button>{"<"}</button>
                    <button>{">"}</button>
                </div>
            </div>

            <div className="game-carousel__bottom">
                {GAMES_ON_SALE.map((game, i) => (
                    <MediumPoster key={i} poster={game.poster} title={game.name} price={game.price} discount={game.discount} index={i} />
                ))}
            </div>
        </div>
    );
};

export default GameCarousel;
