import React from "react";

import { useParams } from "react-router-dom";

const GamePage = () => {
    const params = useParams();

    console.log(params.game);

    return <div></div>;
};

export default GamePage;
