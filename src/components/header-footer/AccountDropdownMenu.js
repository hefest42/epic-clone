import React from "react";

import { useDispatch } from "react-redux";

import { logOutAccount } from "../../store/AccountSlice";

import { Link } from "react-router-dom";

const AccountDropdownMenu = ({ mouseLeaveFn }) => {
    const dispatch = useDispatch();

    return (
        <div className="account-dropdown" onMouseLeave={mouseLeaveFn}>
            <div>ACCOUNT</div>
            <Link to="my-achievements">MY ACHIEVEMENTS</Link>
            <Link to="redeem-code">REDEEM CODE</Link>
            <Link to="coupons">COUPONS</Link>
            <Link to="wishlist">WISHLIST</Link>
            <div onClick={() => dispatch(logOutAccount())}>SIGN OUT</div>
        </div>
    );
};

export default AccountDropdownMenu;
