import React from "react";

import PosterSmall from "../../UI/PosterSmall";

const NewTopComing = ({ newGames, topGames, comingGames }) => {
    return (
        <div className="newtopcoming">
            <div className="newtopcoming-games">
                <div className="newtopcoming-title">
                    <h4>New Releases</h4>
                    <button>View More</button>
                </div>
                {newGames.map((game, i) => (
                    <PosterSmall key={i} game={game} index={i} />
                ))}
            </div>

            <div className="newtopcoming-games">
                <div className="newtopcoming-title">
                    <h4>New Releases</h4>
                    <button>View More</button>
                </div>
                {topGames.map((game, i) => (
                    <PosterSmall key={i} game={game} index={i} />
                ))}
            </div>

            <div className="newtopcoming-games">
                <div className="newtopcoming-title">
                    <h4>New Releases</h4>
                    <button>View More</button>
                </div>
                {comingGames.map((game, i) => (
                    <PosterSmall key={i} game={game} index={i} />
                ))}
            </div>
        </div>
    );
};

export default NewTopComing;
