import React from "react";
import { Link } from "react-router-dom";

// FIX SIGN OUT
const AccountDropdownMenu = ({ mouseLeaveFn }) => {
    return (
        <div className="header-right__dropdown" onMouseLeave={mouseLeaveFn}>
            <ul>
                <Link to="/account">
                    <li>ACCOUNT </li>
                </Link>

                <Link to="/achievements">
                    <li>MY ACHIEVEMENTS</li>
                </Link>

                <Link to="/redeem-code">
                    <li>REDEEM CODE</li>
                </Link>

                <Link to="/coupons">
                    <li>COUPONS</li>
                </Link>

                <Link to="/wishlist">
                    <li>WISHLIST</li>
                </Link>

                <li>SIGN OUT</li>
            </ul>
        </div>
    );
};

export default AccountDropdownMenu;
