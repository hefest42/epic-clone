import React from "react";

import GamePageHeader from "./GamePageHeader";
import GamePageOverview from "./GamePageOverview";

import { useParams, NavLink } from "react-router-dom";

import { GAMES } from "../../../dummy-server/DUMMY_GAMES";

const GamePage = () => {
    const params = useParams();
    const gameName = params.game;
    const [game] = GAMES.filter(game => game.name.replace(":", "").toLowerCase() === gameName.split("-").join(" "));

    return (
        <div className="gamePage">
            <GamePageHeader name={game.name} />
            <GamePageOverview game={game} />
        </div>
    );
};

export default GamePage;
