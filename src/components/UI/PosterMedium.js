import React from "react";

const PosterMedium = ({ game, index }) => {
    const discountedPrice = () => {
        if (!game.gameOnSale) return;

        const newPrice = +game.price - +game.price * (+game.discount / 100);

        return newPrice.toFixed(2);
    };

    return (
        <div className="medium-poster">
            <div className="medium-poster__image">
                <img src={game.poster} alt={`${game.name} poster`} />
            </div>

            <div className="medium-poster__information">
                <h4>{game.name}</h4>

                {game.gameOnSale ? (
                    <div className="medium-poster__information-sale">
                        <div>{game.discount}%</div>
                        <div>{`$${discountedPrice()}`}</div>
                        <div>${game.price}</div>
                    </div>
                ) : (
                    <div className="medium-poster__information-price">${game.price}</div>
                )}
            </div>
        </div>
    );
};

export default PosterMedium;
