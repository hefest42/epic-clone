import React from "react";

import Footer from "../header-footer/Footer";

const LogInWarning = ({ warning, showFooter }) => {
    return (
        <section className="logIn-warning ">
            <div className="logIn-warning__container centered">{warning}</div>

            {showFooter && <Footer />}
        </section>
    );
};

export default LogInWarning;
