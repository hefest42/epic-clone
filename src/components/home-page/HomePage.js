import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "../header/Header";

const HomePage = () => {
    return (
        <div>
            <Header />

            <Routes>
                <Route path="discover" element={<p className="test">discover</p>} />
                <Route path="browse" element={<p className="test">browse</p>} />
            </Routes>
        </div>
    );
};

export default HomePage;
