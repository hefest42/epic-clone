import React, { useState, useEffect } from "react";

import { NavLink } from "react-router-dom";

const SubHeader = () => {
    const [stickySubHeader, setStickySubHeader] = useState(false);

    useEffect(() => {
        if (typeof window !== "undefined") {
            window.addEventListener("scroll", () => setStickySubHeader(window.pageYOffset > 70));
        }
    }, []);

    console.log(stickySubHeader);

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

            <div className="subheader-right">
                <NavLink to="wishlist" className={navData => (navData.isActive ? "link-active" : "link")}>
                    Wishlist
                </NavLink>
                <NavLink to="cart" className={navData => (navData.isActive ? "link-active" : "link")}>
                    Cart
                </NavLink>
            </div>
        </div>
    );
};

export default SubHeader;
