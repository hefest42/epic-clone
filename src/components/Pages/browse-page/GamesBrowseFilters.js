import React, { useState } from "react";

import { useLocation, useNavigate } from "react-router-dom";

import { GAMES } from "../../../dummy-server/DUMMY_GAMES";

const prices = ["Free", "Under $10.00", "Under $20.00", "Under $30.00", "$14.99 and above", "Discounted"];
const features = ["Single Player", "Controller Support", "Multiplayer", "Co-op", "Competitive", "VR"];
const types = ["Game", "Game Bundle", "Editor", "Game Add-ons", "Game Demo", "Apps"];
const platforms = ["Windows", "Mac OS"];

const GamesBrowseFilters = () => {
    const location = useLocation();
    const navigation = useNavigate();

    const [showEvents, setShowEvents] = useState(true);
    const [showPrice, setShowPrice] = useState(true);
    const [showGenre, setShowGenre] = useState(true);
    const [showFeature, setShowFeature] = useState(true);
    const [showTypes, setShowTypes] = useState(true);
    const [showPlatform, setShowPlatform] = useState(true);

    const allGenres = [
        ...new Set(
            GAMES.map(game => game.genres)
                .flat()
                .sort((a, b) => a.localeCompare(b))
        ),
    ];

    const searchParams = new URLSearchParams(location.search);

    const [activeFilters, setActiveFilters] = useState(
        location.search === ""
            ? []
            : searchParams
                  .toString()
                  .split("&")
                  .map(str => {
                      if (str.split("=")[1].includes("+")) return str.split("=")[1].replace("+", " ");
                      else return str.split("=")[1];
                  })
    );

    const addFilter = term => {
        if (activeFilters.includes(term)) setActiveFilters(activeFilters.filter(filterTerm => filterTerm !== term));
        else setActiveFilters(state => [...state, term]);
    };

    const addSearchParam = (key, value, index) => {
        const fullKeyName = `${key}${index}`;

        if (searchParams.has(fullKeyName)) {
            searchParams.delete(fullKeyName);
            navigation(`${location.pathname}?${searchParams.toString()}`);

            return;
        }

        searchParams.append(fullKeyName, value);

        searchParams.sort();

        navigation(`${location.pathname}?${searchParams.toString()}`);
    };

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
                            <div
                                key={i}
                                className={`${activeFilters.includes(item) ? "filter-active space-between" : "space-between"}`}
                                onClick={() => addFilter(item)}
                            >
                                <span>{item}</span>
                                <span className="browseFilters-filter__checkmark"> &#10004;</span>
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
                        {allGenres.map((item, i) => (
                            <div
                                key={i}
                                className={`${activeFilters.includes(item) ? "filter-active space-between" : "space-between"}`}
                                onClick={() => {
                                    addFilter(item);
                                    addSearchParam("genre", item, i);
                                }}
                            >
                                <span>{item}</span>
                                <span className="browseFilters-filter__checkmark"> &#10004;</span>
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
                            <div
                                key={i}
                                className={`${activeFilters.includes(item) ? "filter-active space-between" : "space-between"}`}
                                onClick={() => addFilter(item)}
                            >
                                <span>{item}</span>
                                <span className="browseFilters-filter__checkmark"> &#10004;</span>
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
                            <div
                                key={i}
                                className={`${activeFilters.includes(item) ? "filter-active space-between" : "space-between"}`}
                                onClick={() => addFilter(item)}
                            >
                                <span>{item}</span>
                                <span className="browseFilters-filter__checkmark"> &#10004;</span>
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
                            <div
                                key={i}
                                className={`${activeFilters.includes(item) ? "filter-active space-between" : "space-between"}`}
                                onClick={() => addFilter(item)}
                            >
                                <span>{item}</span>
                                <span className="browseFilters-filter__checkmark"> &#10004;</span>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default GamesBrowseFilters;
