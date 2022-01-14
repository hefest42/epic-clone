import React from "react";

const PosterBig = ({ type, poster, index, slideNumber }) => {
    switch (type) {
        case "main":
            return (
                <div
                    className="poster-big poster-big__main"
                    style={{
                        transform: `translateX(${(+index - slideNumber) * 100}%)`,
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
