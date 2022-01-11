import React from "react";
import { NavLink } from "react-router-dom";

const HomeSearchBar = () => {
    return (
        <div className="search-bar">
            <div className="search-bar__left">
                <form>
                    <input type="text" placeholder="Search" />
                </form>
                <div>
                    <NavLink className={navData => (navData.isActive ? "search-link__active" : "")} to="/store">
                        Discover
                    </NavLink>
                    <NavLink className={navData => (navData.isActive ? "search-link__active" : "")} to="/store/browse">
                        Browse
                    </NavLink>
                    <NavLink className={navData => (navData.isActive ? "search-link__active" : "")} to="/store/news">
                        News
                    </NavLink>
                </div>
            </div>

            <div className="search-bar__right">
                <NavLink className={navData => (navData.isActive ? "search-link__active" : "")} to="store/wishlist">
                    Wishlist
                </NavLink>
                <NavLink className={navData => (navData.isActive ? "search-link__active" : "")} to="store/cart">
                    Cart
                </NavLink>
            </div>
        </div>
    );
};

export default HomeSearchBar;
