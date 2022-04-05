import React, { useState, useEffect } from "react";

import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { compareTwoArrays } from "../../store/helperFunctions";
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

        //TODO if array.length > 0 link to the game buy page
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

        //* user inputs a genre into the search bar
        //prettier-ignore
        if (allGenres.map(genre => genre.replace(/[-\s:]/g, "").trim().toLowerCase()).includes(searchQuery.replace(/[-\s:]/g, "").trim().toLowerCase())) {
            const linkGenre = allGenres.map(genre => {
                if (genre.replace(/[-\s:]/g, "").trim().toLowerCase() === searchQuery.replace(/[-\s:]/g, "").trim().toLowerCase()) return genre;
            }).filter(genre => genre !== undefined);

            const linkIndex = allGenres
                .map(genre => genre.replace(/[-\s:]/g, "").trim().toLowerCase())
                .findIndex(genre => genre.replace(/[-\s:]/g, "").trim().toLowerCase() === searchQuery.replace(/[-\s:]/g, "").trim().toLowerCase());

       
            navigate(`/store/browse?genre${linkIndex}=${linkGenre[0]}`);
        }
    };

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

            navigate(`/store/browse?genre${index}=${string}`);
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
        const filterGenres = allGenres.filter(genre => genre.toLowerCase().includes(searchInput.toLowerCase()));

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
                    <NavLink to="" className={navData => (navData.isActive ? "link-active" : "link")}>
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
