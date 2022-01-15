import React from "react";

import { NavLink } from "react-router-dom";

const SubHeader = () => {
    return (
        <div className="subheader-container">
            <div className="subheader-left">
                <form action="">
                    <input type="text" placeholder="search" />
                </form>
                <NavLink className={navData => (navData.isActive ? "subheader-link__active" : "")} to="">
                    Discover
                </NavLink>
                <NavLink className={navData => (navData.isActive ? "subheader-link__active" : "")} to="browse">
                    Browse
                </NavLink>
                <NavLink className={navData => (navData.isActive ? "subheader-link__active" : "")} to="news">
                    News
                </NavLink>
            </div>

            <div className="subheader-right">
                <NavLink className={navData => (navData.isActive ? "subheader-link__active" : "")} to="wishlist">
                    Wishlist
                </NavLink>
                <NavLink className={navData => (navData.isActive ? "subheader-link__active" : "")} to="cart">
                    Cart
                </NavLink>
            </div>
        </div>
    );
};

export default SubHeader;
