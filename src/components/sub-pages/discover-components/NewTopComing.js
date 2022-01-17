import React from "react";

import PosterSmall from "../../UI/PosterSmall";

const NewTopComing = ({ GAMES }) => {
    return (
        <div className="newtopcoming">
            <div className="new-container">
                <div>
                    <h4>New Releases</h4>
                    <button>View More</button>
                </div>
                {GAMES.map((game, i) => (
                    <PosterSmall key={i} game={game} index={i} />
                ))}
            </div>

            <div className="top-container">
                <div>
                    <h4>New Releases</h4>
                    <button>View More</button>
                </div>
                {GAMES.map((game, i) => (
                    <PosterSmall key={i} game={game} index={i} />
                ))}
            </div>

            <div className="coming-container">
                <div>
                    <h4>New Releases</h4>
                    <button>View More</button>
                </div>
                {GAMES.map((game, i) => (
                    <PosterSmall key={i} game={game} index={i} />
                ))}
            </div>
        </div>
    );
};

export default NewTopComing;
