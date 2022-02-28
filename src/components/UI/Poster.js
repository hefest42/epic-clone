import React, { Fragment } from "react";

import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { addGamesToWishlist } from "../../store/AccountSlice";

import { shortMonths } from "../../store/helperFunctions";

const Poster = ({ poster, game, index, slideNumber, allGames }) => {
    const dispatch = useDispatch();
    const currentDate = new Date();
    const gameReleaseDate = new Date(game.releaseDate);

    const addGamesToWishlistHandler = () => {
        const wishlistedGame = allGames[index];

        console.log(index);

        dispatch(addGamesToWishlist(wishlistedGame));
    };

    return (
        <Fragment>
            <Link to={`p/${game.name.replace(":", "").split(" ").join("-").toLowerCase()}`}>
                <div className="poster" style={{ transform: `translateX(${(index - slideNumber) * 100}%)` }}>
                    <img src={poster} alt={`${game.name} poster`} />
                    <div className="poster-cover">
                        <div className="poster-cover__information">
                            <h3>
                                {currentDate > gameReleaseDate
                                    ? `Out Now`
                                    : `Out ${shortMonths[gameReleaseDate.getMonth()]}/${gameReleaseDate.getDate()}`}
                            </h3>
                            <p>{game.shortDescription}</p>
                        </div>
                    </div>
                </div>
            </Link>

            <div className="poster-buttons centered" style={{ display: `${index === slideNumber ? "" : "none"}` }}>
                <button>{!currentDate > gameReleaseDate ? "PRE-PURCHASE NOW" : "BUY NOW"}</button>
                <button className="centered" onClick={addGamesToWishlistHandler}>
                    <span className="centered">+</span> ADD TO WISHLIST
                </button>
            </div>
        </Fragment>
    );
};

export default Poster;
