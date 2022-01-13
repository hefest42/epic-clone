import React from "react";

import { GAMES_ON_SALE } from "../../dummy-server/DUMMY_GAMES";

const MediumPoster = () => {
    return (
        <div>
            <div>
                <img src={GAMES_ON_SALE[0].poster} alt="" />
                <button>+</button>
            </div>
            <div>
                <h4>title</h4>
                <p>price</p>
            </div>
        </div>
    );
};

export default MediumPoster;
