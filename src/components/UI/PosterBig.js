import React from "react";

const PosterBig = ({ type, poster, releaseDate, index, slideNumber }) => {
    const currentDate = new Date();
    const gameReleaseDate = new Date(releaseDate);

    console.log(gameReleaseDate);

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
                    <div className="poster-big__cover">
                        <div></div>
                    </div>
                </div>
            );

        case "featured":
            return (
                <div className="poster-big">
                    <img src={poster} alt="poster" />
                </div>
            );
        default:
            return null;
    }
};

export default PosterBig;
