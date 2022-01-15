import React from "react";

const PosterSmall = ({ type, game, index, slideNumber }) => {
    switch (type) {
        case "hero":
            return (
                <div
                    className={
                        index === slideNumber
                            ? "poster-small small-poster__size1 poster-small__active poster-small__background"
                            : "poster-small small-poster__size1"
                    }
                    style={{
                        backgroundColor: `${index === slideNumber ? "rgba(75, 75, 75, 0.4)" : ""}`,
                    }}
                >
                    <div>
                        <img src={game.posterSmall} alt="test" />
                        <p>{game.name}</p>
                    </div>
                </div>
            );

        default:
            return null;
    }
};

export default PosterSmall;
