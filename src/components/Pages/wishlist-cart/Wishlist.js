import React, { useState, useEffect, Fragment } from "react";

import WishlistItem from "./WishlistItem";
import GamesBrowseFilters from "../browse-page/GamesBrowseFilters";
import LogInWarning from "../../UI/LogInWarning";

import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Wishlist = () => {
    const navigate = useNavigate();
    const [showDropdownMenu, setShowDropdownMenu] = useState();
    const account = useSelector(state => state.loggedInAccount.account);
    const isLoggedIn = useSelector(state => state.loggedInAccount.loggedIn);

    useEffect(() => {
        if (!isLoggedIn) navigate("/log-in");
    }, [isLoggedIn, navigate]);

    return (
        <section className="wishlist centered-column">
            <div className="wishlist-wrapper">
                <h1>Wishlist</h1>

                {isLoggedIn && account.wishlist.length > 0 ? (
                    <Fragment>
                        <div className="browseList-buttons__left">
                            <button className="centered" onClick={() => setShowDropdownMenu(state => !state)}>
                                <span>Sort By:</span>
                                <span>{` Recently Added`}</span>
                                <div style={{ transform: `rotate(${showDropdownMenu ? "-90deg" : "90deg"})` }}>{">"}</div>
                            </button>
                            {showDropdownMenu && (
                                <div className="browseList-buttons__dropdown">
                                    <button>On Sale</button>
                                    <button>Recently Added</button>
                                    <button>Alphabetical</button>
                                    <button>Price: Low to High</button>
                                    <button>Price: High to Low</button>
                                </div>
                            )}
                        </div>

                        <div className="wishlist-left__sort">
                            {`Sort by: On Sale`} <span>{">"}</span>
                        </div>
                        <div className="wishlist-wrapper__container">
                            <div className="wishlist-left">
                                <div className="wishlist-left__games">
                                    {account.wishlist.map((game, i) => (
                                        <WishlistItem key={i} game={game} />
                                    ))}
                                </div>
                            </div>

                            <div className="wishlist-right">
                                <GamesBrowseFilters />
                            </div>
                        </div>
                    </Fragment>
                ) : (
                    <LogInWarning warning="You have no games on your Wishlist" />
                )}
            </div>
        </section>
    );
};

export default Wishlist;
