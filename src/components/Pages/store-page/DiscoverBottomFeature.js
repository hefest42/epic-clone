import React from "react";

import browsePoster from "../../../game-posters/browse-poster.png";

const DiscoverBottomFeature = () => {
    return (
        <section className="discover-feature">
            <div className="discover-feature__left">
                <img src={browsePoster} alt="" />
            </div>

            <div className="discover-feature__right">
                <div>
                    <h4>Browse</h4>
                    <p>Explore our catalog for your next favorite game!</p>
                    <button>LEARN MORE</button>
                </div>
            </div>
        </section>
    );
};

export default DiscoverBottomFeature;
