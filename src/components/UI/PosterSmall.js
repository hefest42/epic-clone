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
                    <div className="small-poster__size1-information">
                        <img src={game.posterSmall} alt="test" />
                        <p>{game.name}</p>
                    </div>
                </div>
            );

        default:
            return (
                <div className="poster-small small-poster__size2">
                    <div>
                        <img src={game.posterSmall} alt="test" />
                        <div className="small-poster__size2-information">
                            <p>{game.name}</p>
                            <p>{`$${game.price}`}</p>
                        </div>
                    </div>
                </div>
            );
    }
};

export default PosterSmall;
