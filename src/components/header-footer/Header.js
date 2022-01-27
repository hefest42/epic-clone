import React, { useState } from "react";

import AccountDropdownMenu from "./AccountDropdownMenu";

import { NavLink } from "react-router-dom";

const Header = () => {
    const [showDropdownMenu, setShowDropdownMenu] = useState(false);

    return (
        <header onMouseLeave={() => setShowDropdownMenu(false)}>
            <div className="header-left">
                <NavLink to="" className={navData => (navData.isActive ? "header-left__link link-active" : "header-left__link")}>
                    <div className="header-left__link-top">
                        <span>STORE</span>
                    </div>
                    <div className="header-left__link-down"></div>
                </NavLink>

                <NavLink to="faq" className={navData => (navData.isActive ? "header-left__link link-active" : "header-left__link")}>
                    <div className="header-left__link-top">
                        <span>FAQ</span>
                    </div>
                    <div className="header-left__link-down"></div>
                </NavLink>

                <NavLink to="help" className={navData => (navData.isActive ? "header-left__link link-active" : "header-left__link")}>
                    <div className="header-left__link-top">
                        <span>HELP</span>
                    </div>
                    <div className="header-left__link-down"></div>
                </NavLink>

                <NavLink to="unreal-engine" className={navData => (navData.isActive ? "header-left__link link-active" : "header-left__link")}>
                    <div className="header-left__link-top">
                        <span>UNREAL ENGINE</span>
                    </div>
                    <div className="header-left__link-down"></div>
                </NavLink>
            </div>

            <div className="header-right">
                <div className="header-right__language" onMouseEnter={() => setShowDropdownMenu(false)}>
                    <span>EN</span>
                </div>
                <div className="header-right__account" onMouseEnter={() => setShowDropdownMenu(true)}>
                    <span>USERNAME</span>
                </div>
                {showDropdownMenu && <AccountDropdownMenu mouseLeaveFn={() => setShowDropdownMenu(false)} />}
                <button onMouseEnter={() => setShowDropdownMenu(false)}>DOWNLOAD</button>
            </div>
        </header>
    );
};

export default Header;
