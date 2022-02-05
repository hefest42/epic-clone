import React from "react";

import Footer from "../header-footer/Footer";

import { Link } from "react-router-dom";

const LogInWarning = ({ warning }) => {
    return (
        <section className="logIn-warning ">
            <div className="logIn-warning__container centered">
                <Link to="/log-in">Sign In</Link>
                <span>to see your {warning}</span>
            </div>

            <Footer />
        </section>
    );
};

export default LogInWarning;
