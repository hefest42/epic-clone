import React from "react";

import { Link } from "react-router-dom";

const AccountDropdownMenu = ({ mouseLeaveFn }) => {
    return (
        <div className="account-dropdown" onMouseLeave={mouseLeaveFn}>
            <div>ACCOUNT</div>
            <Link to="my-achievements">MY ACHIEVEMENTS</Link>
            <Link to="redeem-code">REDEEM CODE</Link>
            <Link to="coupons">COUPONS</Link>
            <Link to="wishlist">WISHLIST</Link>
            <div>SIGN OUT</div>
        </div>
    );
};

export default AccountDropdownMenu;
