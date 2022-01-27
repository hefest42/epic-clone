import React from "react";

import PopularGenresCarouselItem from "./PopularGenresCarouselItem";

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
                <PopularGenresCarouselItem />
            </div>
        </section>
    );
};

export default PopularGenresCarousel;
