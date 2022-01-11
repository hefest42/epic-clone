import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "../header/Header";
import HomeSearchBar from "./HomeSearchBar";

const HomePage = () => {
    return (
        <div>
            <Header />
            <div className="home-container">
                <HomeSearchBar />

                <Routes>
                    <Route path="discover" element={<p className="test">discover</p>} />
                    <Route path="browse" element={<p className="test">browse</p>} />
                </Routes>
            </div>
        </div>
    );
};

export default HomePage;
