import React from "react";

import { Link } from "react-router-dom";

const FreeGames = ({ firstGame, secondGame }) => {
    return (
        <section className="free">
            <div className="free-title">
                <h3>Free Games</h3>
                <button>VIEW MORE</button>
            </div>

            <div className="free-posters">
                <div className="free-container">
                    <Link to={`p/${firstGame.name.replace(":", "").split(" ").join("-").toLowerCase()}`}>
                        <div className="free-image">
                            <img src={firstGame.posterBig} alt="" />
                            <div className="free-cover">
                                <div className="free-cover__left">FREE NOW</div>
                            </div>
                        </div>
                        <div className="free-info">
                            <h4>Relicta</h4>
                            <p>Free Now - Jan 27 at 05:00 PM</p>
                        </div>
                    </Link>
                </div>

                <div className="free-container">
                    <Link to={`p/${secondGame.name.replace(":", "").split(" ").join("-").toLowerCase()}`}>
                        <div className="free-image">
                            <img src={secondGame.posterBig} alt="" />
                            <div className="free-cover">
                                <div className="free-cover__right">COMING SOON</div>
                            </div>
                        </div>
                        <div className="free-info">
                            <h4>DAEMON X MACHINA</h4>
                            <p>Free Jan 27 - Feb 03</p>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default FreeGames;
