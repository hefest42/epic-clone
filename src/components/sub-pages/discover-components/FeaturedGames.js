import React from "react";

import PosterBig from "../../UI/PosterBig";

const FeaturedGames = ({ GAMES }) => {
    return (
        <div className="featured-games">
            <div className="featured-games__left">
                <div className="featured-games__poster">
                    <PosterBig type="featured" game={GAMES[3]} />
                </div>
                <div className="featured-games__info">
                    <h4>{GAMES[3].name}</h4>
                    <p>{GAMES[3].shortDescription}</p>
                    <h4>${GAMES[3].price}</h4>
                </div>
            </div>
            <div className="featured-games__right">
                <div className="featured-games__poster">
                    <PosterBig type="featured" game={GAMES[2]} />
                </div>
                <div className="featured-games__info">
                    <h4>{GAMES[2].name}</h4>
                    <p>{GAMES[2].shortDescription}</p>
                    <h4>${GAMES[2].price}</h4>
                </div>
            </div>
        </div>
    );
};

export default FeaturedGames;
