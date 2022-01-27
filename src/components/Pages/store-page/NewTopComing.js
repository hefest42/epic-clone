import React, { useState } from "react";

import { Link } from "react-router-dom";

import HorizontalPoster from "../../UI/HorizontalPoster";

const NewTopComing = ({ newReleases, topSellers, comingSoon }) => {
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
                        <Link
                            key={i}
                            to={`p/${game.name.replace(":", "").split(" ").join("-").toLowerCase()}`}
                            onMouseEnter={() => setFirstIndex(i)}
                            onMouseLeave={() => setFirstIndex("")}
                        >
                            <div className="newtopcoming-container__games-game">
                                <HorizontalPoster game={game} showPrice={true} index={i} posterNumber={firstIndex} />
                            </div>
                        </Link>
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
                        <Link
                            key={i}
                            to={`p/${game.name.replace(":", "").split(" ").join("-").toLowerCase()}`}
                            onMouseEnter={() => setSecondIndex(i)}
                            onMouseLeave={() => setSecondIndex("")}
                        >
                            <div className="newtopcoming-container__games-game">
                                <HorizontalPoster game={game} showPrice={true} index={i} posterNumber={secondIndex} />
                            </div>
                        </Link>
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
                        <Link
                            key={i}
                            to={`p/${game.name.replace(":", "").split(" ").join("-").toLowerCase()}`}
                            onMouseEnter={() => setThirdIndex(i)}
                            onMouseLeave={() => setThirdIndex("")}
                        >
                            <div className="newtopcoming-container__games-game">
                                <HorizontalPoster game={game} showPrice={true} index={i} posterNumber={thirdIndex} />
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default NewTopComing;
