import React from "react";
import { Link } from "react-router-dom";

const AccountDropdownMenu = () => {
    return (
        <div className="header-right__dropdown">
            <ul>
                <li>
                    <Link to="/account">ACCOUNT</Link>
                </li>

                <li>MY ACHIEVEMENTS</li>
                <li>REDEEM CODE</li>
                <li>COUPONS</li>
                <li>WISHLIST</li>
                <li>SIGN OUT</li>
            </ul>
        </div>
    );
};

export default AccountDropdownMenu;
