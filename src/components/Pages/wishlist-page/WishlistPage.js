import React, { Fragment } from "react";

import Wishlist from "./Wishlist";
import LogInWarning from "../../UI/LogInWarning";
import Footer from "../../header-footer/Footer";

import { useSelector } from "react-redux";

const WishlistPage = () => {
    const isLoggedIn = useSelector(state => state.loggedInAccount.isLoggedIn);

    return <>{isLoggedIn ? <Wishlist /> : <LogInWarning warning="Wishlist" />}</>;
};

export default WishlistPage;
