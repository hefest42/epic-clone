import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <div className="header-left">
                <NavLink to="/store">LOGO</NavLink>
                <NavLink to="/store">STORE</NavLink>
                <NavLink to="/store">FAQ</NavLink>
                <NavLink to="/store">HELP</NavLink>
                <NavLink to="/store">UNREAL ENGINE</NavLink>
            </div>

            <div className="header-right">
                <div>NAME</div>
                <button>DOWNLOAD</button>
            </div>
        </header>
    );
};

export default Header;
