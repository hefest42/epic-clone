import React from "react";

const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const Poster = ({ poster, game, index, slideNumber, cover }) => {
    const currentDate = new Date();
    const gameReleaseDate = new Date(game.releaseDate);

    return (
        <div className="poster" style={{ transform: `translateX(${(index - slideNumber) * 100}%)` }}>
            <img src={poster} alt="" />

            {cover && (
                <div className="poster-cover">
                    <div className="poster-cover__info">
                        <div className="poster-cover__info-top">
                            <h3>
                                {currentDate < gameReleaseDate
                                    ? `Out ${monthNames[gameReleaseDate.getMonth()]} ${gameReleaseDate.getDate()}`
                                    : "Out Now"}
                            </h3>
                            <p>{game.shortDescription}</p>
                        </div>

                        <div className="poster-cover__info-bottom">
                            <h3>{`$${game.price}`}</h3>
                            <div className="poster-buttons">
                                <button className="poster-buttons__buy">{currentDate > gameReleaseDate ? "BUY NOW" : "PRE-PURCHASE"}</button>
                                <button className="poster-buttons__wishlist">
                                    <span>+</span>
                                    <p>ADD TO WISHLIST</p>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Poster;
