import React, { Fragment } from "react";

import Header from "../header-footer/Header";
import SubHeader from "../header-footer/SubHeader";

const StorePage = () => {
    return (
        <Fragment>
            <Header />

            <div className="store">
                <SubHeader />
            </div>
        </Fragment>
    );
};

export default StorePage;
