import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <div className="header-left">
                <NavLink to="/store">LOGO</NavLink>

                <NavLink to="/store">
                    <p>STORE</p>
                </NavLink>
                <NavLink to="/store">
                    <p>FAQ</p>
                </NavLink>
                <NavLink to="/store">
                    <p>HELP</p>
                </NavLink>
                <NavLink to="/store">
                    <p>UNREAL ENGINE</p>
                </NavLink>
            </div>

            <div className="header-right">
                <div>NAME</div>
                <button>DOWNLOAD</button>
            </div>
        </header>
    );
};

export default Header;
