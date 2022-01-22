import React from "react";

import Poster from "../../UI/Poster";

import { GAMES } from "../../../dummy-server/DUMMY_GAMES";

const GameCarousel = () => {
    return (
        <section className="game-carousel">
            <div className="game-carousel__title">
                <div className="game-carousel__title-left">
                    <h3>Games On sale</h3>
                    <span>&#x203A;</span>
                </div>
                <div className="game-carousel__title-right">
                    <button>&#x2039;</button>
                    <button>&#x203A;</button>
                </div>
            </div>

            <div className="game-carousel__container">
                <div className="game-carousel__poster">
                    <div className="game-carousel__poster-top">
                        <Poster poster={GAMES[0].posterSmall} game={GAMES[0]} index={0} slideNumber={0} cover={false} />
                    </div>

                    <div className="game-carousel__poster-bottom">
                        <h4>game</h4>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GameCarousel;
