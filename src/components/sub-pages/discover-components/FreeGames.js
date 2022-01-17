import React from "react";
import PosterBig from "../../UI/PosterBig";

const FreeGames = ({ GAMES }) => {
    return (
        <div className="free-games">
            <div>
                <div className="free-games__top">
                    <h2>Free Games</h2>
                    <button>VIEW MORE</button>
                </div>
                <div className="free-games__middle">
                    <PosterBig type="featured" game={GAMES[4]} />
                    <PosterBig type="featured" game={GAMES[5]} />
                </div>
                <div className="free-games__bottom">
                    <div>
                        <h3>{GAMES[4].name}</h3>
                        <h4>{`Free Now - Jan 20 at 05:00 PM`}</h4>
                    </div>
                    <div>
                        <h3>{GAMES[5].name}</h3>
                        <h4>{`Free Jan 20 - Jan 27`}</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FreeGames;
