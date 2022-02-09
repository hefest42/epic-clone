import React, { Fragment } from "react";

import Wishlist from "./Wishlist";
import LogInWarning from "../../UI/LogInWarning";

import { useSelector } from "react-redux";

const WishlistPage = () => {
    const isLoggedIn = useSelector(state => state.loggedInAccount.loggedIn);

    return <>{isLoggedIn ? <Wishlist /> : <LogInWarning warning="Sign In to see your Wishlist" />}</>;
};

export default WishlistPage;
