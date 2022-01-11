import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "../header/Header";
import HomeSearchBar from "./HomeSearchBar";
import DiscoverPage from "../discover-page/DiscoverPage";

const HomePage = () => {
    return (
        <div>
            <Header />
            <div className="home-container">
                <HomeSearchBar />

                <Routes>
                    <Route path="/" element={<DiscoverPage />} />
                    <Route path="browse" element={<p className="test"></p>} />
                    <Route path="news" element={<p className="test"></p>} />
                    <Route path="wishlist" element={<p className="test"></p>} />
                    <Route path="cart" element={<p className="test"></p>} />
                </Routes>
            </div>
        </div>
    );
};

export default HomePage;
