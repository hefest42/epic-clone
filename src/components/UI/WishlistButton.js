import React from "react";

const WishlistButton = ({ type }) => {
    switch (type) {
        case "big":
            return (
                <button className="wishlist-button__big">
                    <span>+</span>
                    <p>ADD TO WISHLIST</p>
                </button>
            );

        case "small":
            return (
                <div>
                    <button>+</button>
                </div>
            );
        default:
            return null;
    }
};

export default WishlistButton;
