import React from "react";

import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header>
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
            <div className="header-right"></div>
        </header>
    );
};

export default Header;
