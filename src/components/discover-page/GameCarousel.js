import React from "react";

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

            <div className="game-carousel__bottom">test</div>
        </div>
    );
};

export default GameCarousel;
