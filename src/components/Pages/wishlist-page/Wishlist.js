import React, { useState, Fragment } from "react";

import WishlistItem from "./WishlistItem";
import GamesBrowseFilters from "../browse-page/GamesBrowseFilters";
import Footer from "../../header-footer/Footer";
import LogInWarning from "../../UI/LogInWarning";

import { useSelector } from "react-redux";

import { GAMES } from "../../../dummy-server/DUMMY_GAMES";

const Wishlist = () => {
    const [showDropdownMenu, setShowDropdownMenu] = useState();
    const account = useSelector(state => state.loggedInAccount.account);

    console.log(account.wishlist ? "yes" : "no");

    return (
        <section className="wishlist centered-column">
            <div className="wishlist-wrapper">
                <h1>Wishlist</h1>

                {account.wishlist.length > 0 ? (
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
                    <LogInWarning warning="You have no games on your Wishlist" showFooter={false} />
                )}
            </div>
        </section>
    );
};

export default Wishlist;
