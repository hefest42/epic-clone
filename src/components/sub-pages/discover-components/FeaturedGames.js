import React from "react";

import PosterBig from "../../UI/PosterBig";

const FeaturedGames = ({ firstGame, secondGame }) => {
    return (
        <div className="featured-games">
            <div className="featured-games__left">
                <div className="featured-games__poster">
                    <PosterBig type="featured" game={firstGame} />
                </div>
                <div className="featured-games__info">
                    <h4>{firstGame.name}</h4>
                    <p>{firstGame.shortDescription}</p>
                    <h4>${firstGame.price}</h4>
                </div>
            </div>
            <div className="featured-games__right">
                <div className="featured-games__poster">
                    <PosterBig type="featured" game={secondGame} />
                </div>
                <div className="featured-games__info">
                    <h4>{secondGame.name}</h4>
                    <p>{secondGame.shortDescription}</p>
                    <h4>${secondGame.price}</h4>
                </div>
            </div>
        </div>
    );
};

export default FeaturedGames;
