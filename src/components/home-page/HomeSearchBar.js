import React from "react";

const HomeSearchBar = () => {
    return (
        <div className="search-bar">
            <div className="search-bar__left">
                <form>
                    <input type="text" />
                </form>
                <div>
                    <p>Discover</p>
                    <p>Browse</p>
                    <p>News</p>
                </div>
            </div>

            <div className="search-bar__right">
                <p>Wishlist</p>
                <p>Cart</p>
            </div>
        </div>
    );
};

export default HomeSearchBar;
