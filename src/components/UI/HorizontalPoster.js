import React from "react";

const HorizontalPoster = ({ game, showPrice, index, posterNumber }) => {
    const calcDiscount = (price, discount) => {
        return (price * (100 - discount)) / 100;
    };

    return (
        <div className="horizontal-poster">
            <div className="horizontal-poster__left">
                <img src={game.posterSmall} alt="" />
            </div>

            <div className="horizontal-poster__right">
                <span>{game.name}</span>
                {showPrice && game.gameOnSale && (
                    <div className="game-on-sale">
                        <span>-{game.discount}%</span>
                        <span>${game.price}</span>
                        <span>${calcDiscount(game.price, game.discount).toFixed(2)}</span>
                    </div>
                )}
                {showPrice && !game.gameOnSale && <span>${game.price}</span>}
            </div>
        </div>
    );
};

export default HorizontalPoster;
