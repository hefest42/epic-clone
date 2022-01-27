import React from "react";

const PopularGenresCarousel = () => {
    return (
        <section className="popular-genres">
            <div>
                <h3>Popular Genres</h3>
                <div>
                    <button className="carousel-button">{"<"}</button>
                    <button className="carousel-button">{">"}</button>
                </div>
            </div>
        </section>
    );
};

export default PopularGenresCarousel;
