import React from "react";

const PosterMedium = ({ game, index }) => {
    return (
        <div
            className="medium-poster"
            style={{
                transform: `translateX(${+index * 100}%)`,
            }}
        >
            <div className="medium-poster__image">
                <img src={game.poster} alt={`${game.name} poster`} />
            </div>
        </div>
    );
};

export default PosterMedium;
