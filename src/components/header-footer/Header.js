import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import AccountDropdownMenu from "./AccountDropdownMenu";

// FIX DROPDOWNMENU
const Header = () => {
    const [showDropdownMenu, setShowDropdownMenu] = useState(false);

    const headerHandler = () => {
        setShowDropdownMenu(false);
    };

    return (
        <header onMouseEnter={headerHandler} onMouseLeave={() => setShowDropdownMenu(false)}>
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
                <div className="header-right__user" onMouseEnter={() => setShowDropdownMenu(true)}>
                    <span>USERNAME</span>
                </div>
                {showDropdownMenu && <AccountDropdownMenu mouseLeaveFn={() => setShowDropdownMenu(false)} />}
                <button>DOWNLOAD</button>
            </div>
        </header>
    );
};

export default Header;
