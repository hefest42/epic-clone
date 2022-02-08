import React, { useState } from "react";

import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { addGamesToWishlist } from "../../../store/AccountSlice";

import HorizontalPoster from "../../UI/HorizontalPoster";

const NewTopComing = ({ newReleases, topSellers, comingSoon }) => {
    const dispatch = useDispatch();
    const [firstIndex, setFirstIndex] = useState("");
    const [secondIndex, setSecondIndex] = useState("");
    const [thirdIndex, setThirdIndex] = useState("");

    return (
        <section className="newtopcoming">
            <div className="newtopcoming-container newtopcoming-border">
                <div className="newtopcoming-container__title">
                    <h4>New Releases</h4>
                    <button>VIEW MORE</button>
                </div>
                <div className="newtopcoming-container__games">
                    {newReleases.map((game, i) => (
                        <div key={i} style={{ position: "relative" }}>
                            <Link
                                to={`p/${game.name.replace(":", "").split(" ").join("-").toLowerCase()}`}
                                onMouseEnter={() => setFirstIndex(i)}
                                onMouseLeave={() => setFirstIndex("")}
                            >
                                <div className={firstIndex === i ? "newtopcoming-container__games-active" : "newtopcoming-container__games-inactive"}>
                                    <HorizontalPoster game={game} showPrice={true} index={i} posterNumber={firstIndex} />
                                </div>
                            </Link>

                            {firstIndex === i && (
                                <button
                                    className="wishlist-button__small"
                                    style={{
                                        top: "12%",
                                        right: "69%",
                                    }}
                                    onMouseEnter={() => setFirstIndex(i)}
                                    onMouseLeave={() => setFirstIndex("")}
                                    onClick={() => dispatch(addGamesToWishlist(game))}
                                >
                                    +
                                </button>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            <div className="newtopcoming-container newtopcoming-border">
                <div className="newtopcoming-container__title">
                    <h4>Top Sellers</h4>
                    <button>VIEW MORE</button>
                </div>
                <div className="newtopcoming-container__games">
                    {topSellers.map((game, i) => (
                        <div key={i} style={{ position: "relative" }}>
                            <Link
                                to={`p/${game.name.replace(":", "").split(" ").join("-").toLowerCase()}`}
                                onMouseEnter={() => setSecondIndex(i)}
                                onMouseLeave={() => setSecondIndex("")}
                            >
                                <div
                                    className={secondIndex === i ? "newtopcoming-container__games-active" : "newtopcoming-container__games-inactive"}
                                >
                                    <HorizontalPoster game={game} showPrice={true} index={i} posterNumber={secondIndex} />
                                </div>
                            </Link>

                            {secondIndex === i && (
                                <button
                                    className="wishlist-button__small"
                                    style={{
                                        top: "12%",
                                        right: "69%",
                                    }}
                                    onMouseEnter={() => setSecondIndex(i)}
                                    onMouseLeave={() => setSecondIndex("")}
                                    onClick={() => dispatch(addGamesToWishlist(game))}
                                >
                                    +
                                </button>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            <div className="newtopcoming-container">
                <div className="newtopcoming-container__title">
                    <h4>Coming Soon</h4>
                    <button>VIEW MORE</button>
                </div>
                <div className="newtopcoming-container__games">
                    {comingSoon.map((game, i) => (
                        <div key={i} style={{ position: "relative" }}>
                            <Link
                                to={`p/${game.name.replace(":", "").split(" ").join("-").toLowerCase()}`}
                                onMouseEnter={() => setThirdIndex(i)}
                                onMouseLeave={() => setThirdIndex("")}
                            >
                                <div className={thirdIndex === i ? "newtopcoming-container__games-active" : "newtopcoming-container__games-inactive"}>
                                    <HorizontalPoster game={game} showPrice={true} index={i} posterNumber={thirdIndex} />
                                </div>
                            </Link>

                            {thirdIndex === i && (
                                <button
                                    className="wishlist-button__small"
                                    style={{
                                        top: "12%",
                                        right: "69%",
                                    }}
                                    onMouseEnter={() => setThirdIndex(i)}
                                    onMouseLeave={() => setThirdIndex("")}
                                    onClick={() => dispatch(addGamesToWishlist(game))}
                                >
                                    +
                                </button>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default NewTopComing;
