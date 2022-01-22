import React, { Fragment } from "react";

import { Routes, Route } from "react-router-dom";

import Header from "../../header-footer/Header";
import SubHeader from "../../header-footer/SubHeader";
import HeroCarousel from "./HeroCarousel";

const StorePage = () => {
    return (
        <Fragment>
            <Header />

            <Routes>
                <Route
                    path=""
                    element={
                        <div className="store">
                            <SubHeader />
                            <HeroCarousel />
                        </div>
                    }
                />
            </Routes>
        </Fragment>
    );
};

export default StorePage;
