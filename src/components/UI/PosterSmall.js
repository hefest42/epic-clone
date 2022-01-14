import React from "react";

const PosterSmall = ({ type, game, index }) => {
    switch (type) {
        case "hero":
            return (
                <div className="poster-small small-poster__size1">
                    <div>
                        <img src={game.posterSmall} alt="test" />
                        <p>{game.name}</p>
                    </div>
                </div>
            );

        default:
            return <p>TEST</p>;
    }
};

export default PosterSmall;
