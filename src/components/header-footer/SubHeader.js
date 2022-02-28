import React from "react";

import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const SubHeader = () => {
    const isLoggedIn = useSelector(state => state.loggedInAccount.loggedIn);
    const cartGames = useSelector(state => state.loggedInAccount.cart);

    return (
        <div className="subheader">
            <div className="subheader-left">
                <form action="">
                    <span>&#128269;</span>
                    <input type="text" placeholder="Search" />
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
                    <NavLink to="cart centered" className={navData => (navData.isActive ? "link-active" : "link")}>
                        <p>Cart</p>
                    </NavLink>
                )}
                {cartGames.length === 0 ? "" : <div className="subheader-right__cart">{cartGames.length}</div>}
            </div>
        </div>
    );
};

export default SubHeader;
