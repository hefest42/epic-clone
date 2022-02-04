import React, { useState } from "react";

import AccountInput from "./AccountInput";

import { Link, useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";

import { setAccount } from "../../../store/AccountSlice";

import { ACCOUNTS } from "../../../dummy-server/DUMMY_ACCOUNTS";

const LogIn = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [errorMessage, setErrorMessage] = useState("");
    const [emailValue, setEmailValue] = useState("");
    const [passwordValue, setPasswordValue] = useState("");

    const logInHandler = e => {
        e.preventDefault();

        const index = ACCOUNTS.findIndex(acc => acc.email === emailValue);

        if (index === -1) {
            setErrorMessage("Please check your email/password");
            return;
        }

        const account = ACCOUNTS[index];

        if (account.password !== passwordValue) {
            console.log("wrong password");
            setErrorMessage("Please check your email/password");
            return;
        }

        dispatch(setAccount(account));
        navigate("/store");
    };

    return (
        <div className="logIn centered">
            <div className="logIn-outer centered-column">
                <form className="logIn-inner centered-column" onSubmit={logInHandler}>
                    <div className="createAccount-title">Sign in with an Epic Games Account</div>

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
