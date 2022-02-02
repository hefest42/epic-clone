import React, { useState } from "react";

import AccountInput from "./AccountInput";

import { Link } from "react-router-dom";

const LogIn = () => {
    const [errorMessage, setErrorMessage] = useState("");
    const [emailValue, setEmailValue] = useState("");
    const [passwordValue, setPasswordValue] = useState("");

    return (
        <div className="logIn centered">
            <div className="logIn-outer centered-column">
                <form className="logIn-inner centered-column">
                    <div className="logIn-inner__title">Sign in with an Epic Games Account</div>

                    {errorMessage === "" ? (
                        ""
                    ) : (
                        <div className="createAccount-error centered">
                            <p>{errorMessage}</p>
                        </div>
                    )}

                    <AccountInput title="Email Address" type="text" id="email" inputValue={emailValue} getInputValue={setEmailValue} />
                    <AccountInput title="Password" type="password" id="password" inputValue={passwordValue} getInputValue={setPasswordValue} />

                    <button className={emailValue === "" || passwordValue === "" ? "createAccount-button__inactive" : "createAccount-button__active"}>
                        LOG IN NOW
                    </button>

                    <div className="createAccount-info centered-column">
                        <p>Privacy Policy</p>
                        <p>
                            Don't have an Epic Games Account?{" "}
                            <Link to={"/create-account"}>
                                <span>Sign Up</span>
                            </Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LogIn;
