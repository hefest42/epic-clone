import React, { Fragment } from "react";

import { NavLink, useParams } from "react-router-dom";

const GamePageHeader = ({ name }) => {
    const params = useParams();
    const gameName = params.game;

    return (
        <Fragment>
            <h1 className="gamePage-header__title">{name}</h1>
            <div className="gamePage-header__links">
                <NavLink
                    to={`/store/p/${gameName}`}
                    className={navData => (navData.isActive ? "gamePage-header__active" : "gamePage-header__inactive")}
                >
                    Overview
                </NavLink>
                <NavLink
                    to={`/store/p/achievements/${gameName}`}
                    className={navData => (navData.isActive ? "gamePage-header__active" : "gamePage-header__inactive")}
                >
                    Achievements
                </NavLink>
            </div>
        </Fragment>
    );
};

export default GamePageHeader;
