import React, { Fragment } from "react";

import Header from "../../header-footer/Header";
import SubHeader from "../../header-footer/SubHeader";
import HeroCarousel from "./HeroCarousel";

const StorePage = () => {
    return (
        <Fragment>
            <Header />

            <div className="store">
                <SubHeader />
                <HeroCarousel />
            </div>
        </Fragment>
    );
};

export default StorePage;
