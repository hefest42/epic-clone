import React from "react";

const Poster = ({ poster, index, slideNumber }) => {
    return (
        <div className="poster" style={{ transform: `translateX(${(index - slideNumber) * 100}%)` }}>
            <img src={poster} alt="" />
        </div>
    );
};

export default Poster;
