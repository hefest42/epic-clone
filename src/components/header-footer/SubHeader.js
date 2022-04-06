import React, { useState, useEffect } from "react";

import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { GAMES } from "../../dummy-server/DUMMY_GAMES";

const SubHeader = () => {
    const navigate = useNavigate();
    const isLoggedIn = useSelector(state => state.loggedInAccount.loggedIn);
    const cartGames = useSelector(state => state.loggedInAccount.cart);
    const [searchInput, setSearchInput] = useState("");
    const [recommendedSearches, setRecommendedSearches] = useState([]);

    const searchSubmitHandler = e => {
        e.preventDefault();

        const searchQuery = searchInput;

        const filteredGamesByName = GAMES.filter(
            game => game.name.replace(/[\s:]/g, "").trim().toLowerCase() === searchQuery.replace(/[\s:]/g, "").toLowerCase()
        );

        const allGenres = [
            ...new Set(
                GAMES.map(game => game.genres)
                    .flat()
                    .sort((a, b) => a.localeCompare(b))
            ),
        ];

        const filteredGenres = allGenres.filter(
            genre =>
                genre
                    .replace(/[-\s:]/g, "")
                    .trim()
                    .toLowerCase() ===
                searchQuery
                    .replace(/[-\s:]/g, "")
                    .trim()
                    .toLowerCase()
        );

        //* user inputs a game name
        if (filteredGamesByName.length > 0) {
            navigate(`p/${filteredGamesByName[0].name.replace(":", "").split(" ").join("-").toLowerCase()}`);
        }

        //* user inputs a genre
        //prettier-ignore
        if (filteredGenres.length > 0) {
            const linkIndex = allGenres.findIndex(genre => genre === filteredGenres[0])

       
            navigate(`/store/browse?genre${linkIndex}=${filteredGenres[0].replace(" ", "+")}`);
        }

        //* input is just a word, not a specific game/genre
        if (filteredGamesByName.length === 0 && filteredGenres.length === 0) {
            navigate(`/store/browse?q=${searchInput.replace(" ", "+")}`);
        }

        setSearchInput("");
    };

    //* clicking on the recommened search input
    const recommendedSearchHandler = string => {
        const gamesByName = GAMES.map(game => game.name);
        const allGenres = [
            ...new Set(
                GAMES.map(game => game.genres)
                    .flat()
                    .sort((a, b) => a.localeCompare(b))
            ),
        ];

        if (allGenres.includes(string)) {
            const index = allGenres.findIndex(str => str === string);

            navigate(`/store/browse?genre${index}=${string.replace(" ", "+")}`);
        }

        if (gamesByName.includes(string)) {
            navigate(`p/${string.replace(":", "").split(" ").join("-").toLowerCase()}`);
        }

        setSearchInput("");
        setRecommendedSearches([]);
    };

    useEffect(() => {
        if (searchInput === "") {
            setRecommendedSearches([]);
            return;
        }
        setRecommendedSearches([]);

        const gamesByName = GAMES.map(game => game.name);
        const allGenres = [...new Set(GAMES.map(game => game.genres).flat())];

        const filterGamesByName = gamesByName.filter(game => game.toLowerCase().includes(searchInput.toLowerCase()));
        const filterGenres = allGenres.filter(genre =>
            genre.replace(/[\s-]/g, "").toLowerCase().includes(searchInput.toLowerCase().replace(/[\s-]/g, ""))
        );

        setRecommendedSearches(state => [...state, ...filterGamesByName.slice(0, 2), ...filterGenres.slice(0, 2)]);
    }, [searchInput]);

    return (
        <div className="subheader">
            <div className="subheader-left">
                <form action="" onSubmit={searchSubmitHandler}>
                    <span>&#128269;</span>
                    <input type="text" placeholder="Search" value={searchInput} onChange={e => setSearchInput(e.target.value)} />

                    {recommendedSearches.length > 0 && (
                        <div className="subheader-recommended">
                            {recommendedSearches.map((search, i) => (
                                <p className="subheader-recommended__item" key={i} onClick={() => recommendedSearchHandler(search)}>
                                    {search}
                                </p>
                            ))}
                        </div>
                    )}
                </form>

                <div>
                    <NavLink to="/store/" strict={true} className={navData => (navData.isActive ? "link-active" : "link")}>
                        Discover
                    </NavLink>
                    <NavLink to="browse" className={navData => (navData.isActive ? "link-active" : "link")}>
                        Browse
                    </NavLink>
                    <NavLink to="news" className={navData => (navData.isActive ? "link-active" : "link")}>
                        News
                    </NavLink>
                </div>
            </div>

            <div className="subheader-right centered">
                {isLoggedIn && (
                    <NavLink to="wishlist" className={navData => (navData.isActive ? "link-active" : "link")}>
                        Wishlist
                    </NavLink>
                )}

                {isLoggedIn && (
                    <NavLink to="cart" className={navData => (navData.isActive ? "link-active" : "link")}>
                        <p>Cart</p>
                    </NavLink>
                )}
                {cartGames.length === 0 ? "" : <div className="subheader-right__cart">{cartGames.length}</div>}
            </div>
        </div>
    );
};

export default SubHeader;
