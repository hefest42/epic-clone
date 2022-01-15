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
                <div>
                    <button>{"<"}</button>
                    <button>{">"}</button>
                </div>
            </div>

            <div className="games-carousel__bottom">
                {GAMES_ON_SALE.map((game, i) => (
                    <PosterMedium game={game} index={i} />
                ))}
            </div>
        </div>
    );
};

export default GamesCarousel;
