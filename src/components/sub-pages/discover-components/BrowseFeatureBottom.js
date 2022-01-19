import React from "react";

import BuyNowButton from "../../UI/BuyNowButton";
import BrowsePoster from "../../../game-posters/browse-poster.png";

const BrowseFeatureBottom = () => {
    return (
        <div className="browse-feature">
            <div className="browse-feature__left">
                <img src={BrowsePoster} alt="" />
            </div>
            <div className="browse-feature__right">
                <h2>Browse</h2>
                <p>Explore our catalog for your next favorite game!</p>
                <BuyNowButton text="LEARN MORE"></BuyNowButton>
            </div>
        </div>
    );
};

export default BrowseFeatureBottom;
