import React from "react";

import PopularGenresCarouselItem from "./PopularGenresCarouselItem";

import { GAMES } from "../../../dummy-server/DUMMY_GAMES";

const PopularGenresCarousel = () => {
    return (
        <section className="popular-genres">
            <div className="space-between">
                <h2>Popular Genres</h2>
                <div className="centered">
                    <button className="carousel-button">{"<"}</button>
                    <button className="carousel-button">{">"}</button>
                </div>
            </div>

            <div className="popular-genres__container centered">
                <PopularGenresCarouselItem title="Action Games" games={GAMES.slice(0, 3)} index={0} />
                <PopularGenresCarouselItem title="RPG Games" games={GAMES.slice(3, 6)} index={1} />
                <PopularGenresCarouselItem title="Multiplayer Games" games={GAMES.slice(6, 9)} index={2} />
                <PopularGenresCarouselItem title="Casual Games" games={GAMES.slice(9, 12)} index={3} />
                <PopularGenresCarouselItem title="Horror Games" games={GAMES.slice(11, 14)} index={4} />
            </div>
        </section>
    );
};

export default PopularGenresCarousel;
