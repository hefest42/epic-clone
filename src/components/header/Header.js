import React from "react";
import { NavLink } from "react-router-dom";

import AccountDropdownMenu from "./AccountDropdownMenu";

const Header = () => {
    return (
        <header>
            <div className="header-left">
                LOGO
                <NavLink className={navData => (navData.isActive ? "link-active" : "")} to="/store">
                    <p>STORE</p>
                </NavLink>
                <NavLink className={navData => (navData.isActive ? "link-active" : "")} to="/FAQ">
                    <p>FAQ</p>
                </NavLink>
                <NavLink className={navData => (navData.isActive ? "link-active" : "")} to="/help">
                    <p>HELP</p>
                </NavLink>
                <NavLink className={navData => (navData.isActive ? "link-active" : "")} to="/unreal-engine">
                    <p>UNREAL ENGINE</p>
                </NavLink>
            </div>

            <div className="header-right">
                <div>
                    <span>USERNAME</span>
                </div>
                <AccountDropdownMenu />
                <button>DOWNLOAD</button>
            </div>
        </header>
    );
};

export default Header;
