import React, { useState } from "react";

const prices = ["Free", "Under $10.00", "Under $20.00", "Under $30.00", "$14.99 and above", "Discounted"];
const genres = [
    "Action",
    "Indie",
    "RPG",
    "Strategy",
    "Open World",
    "Shooter",
    "Puzzle",
    "First Person",
    "Narration",
    "Simulation",
    "Casual",
    "Turn Based",
    "Exploration",
    "Horror",
    "Platformer",
    "Party",
    "Survival",
    "Trivia",
    "City Builder",
    "Stealth",
    "Fighting",
    "Comedy",
    "Action-Adventure",
    "Racing",
    "Card Game",
    "Sports",
    "Dungeon Crawler",
];
const features = ["Single Player", "Controller Support", "Multiplayer", "Co-op", "Competitive", "VR"];
const types = ["Game", "Game Bundle", "Editor", "Game Add-ons", "Game Demo", "Apps"];
const platforms = ["Windows", "Mac OS"];

const GamesBrowseFilters = () => {
    const [showEvents, setShowEvents] = useState(false);
    const [showPrice, setShowPrice] = useState(false);
    const [showGenre, setShowGenre] = useState(false);
    const [showFeature, setShowFeature] = useState(false);
    const [showTypes, setShowTypes] = useState(false);
    const [showPlatform, setShowPlatform] = useState(false);

    return (
        <div className="browseFilters">
            <form action="">
                <span>&#128269;</span>
                <input type="text" placeholder="Keywords" />
            </form>

            <div className="browseFilters-category centered-column">
                <button className="space-between" onClick={() => setShowEvents(state => !state)}>
                    EVENTS
                    <span
                        style={{
                            transform: `rotate(${showEvents ? "-90deg" : "90deg"})`,
                        }}
                    >
                        {">"}
                    </span>
                </button>
            </div>

            <div className="browseFilters-category centered-column">
                <button className="space-between" onClick={() => setShowPrice(state => !state)}>
                    PRICE
                    <span
                        style={{
                            transform: `rotate(${showPrice ? "-90deg" : "90deg"})`,
                        }}
                    >
                        {">"}
                    </span>
                </button>

                {showPrice && (
                    <div className="browseFilters-filter">
                        {prices.map((item, i) => (
                            <div className="space-between">
                                <span>{item}</span>
                                <span> &#10004;</span>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <div className="browseFilters-category centered-column">
                <button className="space-between" onClick={() => setShowGenre(state => !state)}>
                    GENRE
                    <span
                        style={{
                            transform: `rotate(${showGenre ? "-90deg" : "90deg"})`,
                        }}
                    >
                        {">"}
                    </span>
                </button>

                {showGenre && (
                    <div className="browseFilters-filter">
                        {genres.map((item, i) => (
                            <div className="space-between">
                                <span>{item}</span>
                                <span> &#10004;</span>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <div className="browseFilters-category centered-column">
                <button className="space-between" onClick={() => setShowFeature(state => !state)}>
                    FEATURES
                    <span
                        style={{
                            transform: `rotate(${showFeature ? "-90deg" : "90deg"})`,
                        }}
                    >
                        {">"}
                    </span>
                </button>

                {showFeature && (
                    <div className="browseFilters-filter">
                        {features.map((item, i) => (
                            <div className="space-between">
                                <span>{item}</span>
                                <span> &#10004;</span>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <div className="browseFilters-category centered-column">
                <button className="space-between" onClick={() => setShowTypes(state => !state)}>
                    TYPES
                    <span
                        style={{
                            transform: `rotate(${showTypes ? "-90deg" : "90deg"})`,
                        }}
                    >
                        {">"}
                    </span>
                </button>

                {showTypes && (
                    <div className="browseFilters-filter">
                        {types.map((item, i) => (
                            <div className="space-between">
                                <span>{item}</span>
                                <span> &#10004;</span>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <div className="browseFilters-category centered-column">
                <button className="space-between" onClick={() => setShowPlatform(state => !state)}>
                    PLATFORM
                    <span
                        style={{
                            transform: `rotate(${showPlatform ? "-90deg" : "90deg"})`,
                        }}
                    >
                        {">"}
                    </span>
                </button>

                {showPlatform && (
                    <div className="browseFilters-filter">
                        {platforms.map((item, i) => (
                            <div className="space-between">
                                <span>{item}</span>
                                <span> &#10004;</span>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default GamesBrowseFilters;
