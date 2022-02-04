import React, { Fragment } from "react";

import { Link } from "react-router-dom";

const PopularGenresCarouselItem = ({ title, games, index }) => {
    return (
        <Fragment>
            <div className="carousel-item__wrapper" style={{ transform: `translateX(${index * 100}%)` }}>
                <Link to="/store/p/god-of-war">
                    <div className="carousel-item centered-column">
                        <div className="carousel-item__images centered">
                            <img className="carousel-item__images-1" src={games[0].posterSmall} alt="" />
                            <img className="carousel-item__images-2" src={games[1].posterSmall} alt="" />
                            <img className="carousel-item__images-3" src={games[2].posterSmall} alt="" />
                        </div>
                        <div className="carousel-item__title centered">{title}</div>
                    </div>
                </Link>
                <div className="carousel-item__spacer"></div>
            </div>
        </Fragment>
    );
};

export default PopularGenresCarouselItem;

// style={{ transform: `translateX(${index * 100}%)` }}
