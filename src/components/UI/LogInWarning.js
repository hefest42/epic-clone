import React from "react";

import Footer from "../header-footer/Footer";

const LogInWarning = ({ warning }) => {
    return (
        <section className="logIn-warning ">
            <div className="logIn-warning__container centered">{warning}</div>
        </section>
    );
};

export default LogInWarning;
