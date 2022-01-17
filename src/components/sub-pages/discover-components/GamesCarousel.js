import React from "react";

import PosterMedium from "../../UI/PosterMedium";

import { GAMES_ON_SALE } from "../../../dummy-server/DUMMY_GAMES";

const GamesCarousel = ({ title }) => {
    return (
        <div className="games-carousel">
            <div className="games-carousel__top">
                <div>
                    <h3>{title}</h3>
                    <span>{">"}</span>
                </div>
                <div className="games-carousel__top-buttons">
                    <button>{"<"}</button>
                    <button>{">"}</button>
                </div>
            </div>

            <div className="games-carousel__bottom">
                <div className="games-carousel__bottom-container">
                    {GAMES_ON_SALE.map((game, i) => (
                        <PosterMedium key={i} game={game} index={i} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default GamesCarousel;
