import React from "react";
import { Routes, Route } from "react-router-dom";

import SubHeader from "../header-footer/SubHeader";
import Discover from "../sub-pages/Discover";

const StorePage = () => {
    return (
        <div className="store-container">
            <SubHeader />

            <Routes>
                <Route path="" element={<Discover />} />
            </Routes>
        </div>
    );
};

export default StorePage;
