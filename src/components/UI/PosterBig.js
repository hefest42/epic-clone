import React from "react";

const PosterBig = ({ type, poster }) => {
    switch (type) {
        case "main":
            return (
                <div
                    className="poster-big"
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                    }}
                >
                    <img src={poster} alt="poster" />
                </div>
            );

        case "featured":
            return (
                <div className="poster-big">
                    <img src={poster} alt="poster" />
                </div>
            );
        default:
            return;
    }
};

export default PosterBig;
