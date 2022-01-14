import React from "react";

import { GAMES_ON_SALE } from "../../dummy-server/DUMMY_GAMES";

const MediumPoster = ({ poster, title, price, discount, index }) => {
    return (
        <div className="medium-container" style={{ transform: `translateX(${index * 100}%)` }}>
            <div className="medium-container__image">
                {/* <img src={poster} alt={`${title} poster`} /> */}
                <button>+</button>
            </div>

            <div>
                <h4>{title}</h4>
                <p>{price}</p>
            </div>
        </div>
    );
};

export default MediumPoster;
