import React, { useState } from "react";

import { Link } from "react-router-dom";

const FeaturedGames = ({ firstGame, secondGame }) => {
    const [showFirstWishlistButton, setShowFirstWishlistButton] = useState(false);
    const [showSecondWishlistButton, setShowSecondWishlistButton] = useState(false);

    return (
        <section className="featured">
            <div className="featured-container">
                <Link to={`p/${firstGame.name.replace(":", "").split(" ").join("-").toLowerCase()}`}>
                    <div
                        className="featured-image"
                        onMouseEnter={() => setShowFirstWishlistButton(true)}
                        onMouseLeave={() => setShowFirstWishlistButton(false)}
                    >
                        <img src={firstGame.posterBig} alt="" />
                        <div className="poster-cover__white">{showFirstWishlistButton && <button>+</button>}</div>
                    </div>
                    <h2 className="featured-container__title">{`New from ${firstGame.studio}`}</h2>
                </Link>
                <div className="featured-container__description">{`Pre-purchase ${firstGame.name} today.`} </div>
                {firstGame.price && <h2 className="featured-container__price">${firstGame.price}</h2>}
            </div>

            <div className="featured-container">
                <Link to={`p/${secondGame.name.replace(":", "").split(" ").join("-").toLowerCase()}`}>
                    <div
                        className="featured-image"
                        onMouseEnter={() => setShowSecondWishlistButton(true)}
                        onMouseLeave={() => setShowSecondWishlistButton(false)}
                    >
                        <img src={secondGame.posterBig} alt="" />
                        <div className="poster-cover__white">{showSecondWishlistButton && <button>+</button>}</div>
                    </div>
                    <h2 className="featured-container__title">{secondGame.name}</h2>
                </Link>
                <div className="featured-container__description">{`BMW speeds into ${secondGame.name} for the first time with the fully customizable M240i!`}</div>
                {secondGame.price && <h2 className="featured-container__price">${secondGame.price}</h2>}
            </div>
        </section>
    );
};

export default FeaturedGames;