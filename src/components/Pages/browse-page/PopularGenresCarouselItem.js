import React from "react";

import { Link } from "react-router-dom";

import { GAMES } from "../../../dummy-server/DUMMY_GAMES";

const PopularGenresCarouselItem = () => {
    return (
        <Link to="/store/p/god-of-war">
            <div className="carousel-item centered-column">
                <div className="carousel-item__images centered">
                    <img className="carousel-item__images-1" src={GAMES[0].posterSmall} alt="" />
                    <img className="carousel-item__images-2" src={GAMES[1].posterSmall} alt="" />
                    <img className="carousel-item__images-3" src={GAMES[2].posterSmall} alt="" />
                </div>
                <div className="carousel-item__title centered">Action Games</div>
            </div>
        </Link>
    );
};

export default PopularGenresCarouselItem;
