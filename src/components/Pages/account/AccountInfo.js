import React, { useRef, useState } from "react";

import AccountInput from "./AccountInput";

import { Link, useNavigate } from "react-router-dom";

import { ACCOUNTS } from "../../../dummy-server/DUMMY_ACCOUNTS";

const AccountInfo = ({ birthYearData }) => {
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState("");
    const [firstNameValue, setFirstNameValue] = useState("");
    const [lastNameValue, setLastNameValue] = useState("");
    const [displayNameValue, setDisplayNameValue] = useState("");
    const [emailValue, setEmailValue] = useState("");
    const [passwordValue, setPasswordValue] = useState("");
    const newsletterRef = useRef();
    const termsOfServiceRef = useRef();

    const getAccountDataHandler = e => {
        e.preventDefault();

        if (firstNameValue === "" || lastNameValue === "" || displayNameValue === "" || emailValue === "" || passwordValue === "") {
            setErrorMessage("Please fill out all the fields");
            return;
        }

        if (!emailValue.includes("@")) {
            setErrorMessage("Please use a valid email address.");
            return;
        }

        if (!termsOfServiceRef.current.checked) {
            setErrorMessage("In order to make an Epic Games Account you must agree to the terms of use");
            return;
        }

        ACCOUNTS.push({
            firstName: firstNameValue,
            lastName: lastNameValue,
            displayName: displayNameValue,
            email: emailValue,
            password: passwordValue,
            birthDay: birthYearData,
            newsletter: newsletterRef.current.checked,
            wishlist: [],
        });

        navigate("/log-in");
    };

    //prettier-ignore
    return (
        <div className="accountInfo centered">
            <div className="accountInfo-outer centered-column">
                <div className="accountInfo-inner centered-column">
                    <div className="createAccount-title">Sign In</div>
                    <div className={errorMessage === "" ? "" : "createAccount-error centered"}>{errorMessage}</div>
                    <form action="">
                        <AccountInput title="First Name" type="text" id="first name" inputValue={firstNameValue} getInputValue={setFirstNameValue} />
                        <AccountInput title="Last Name" type="text" id="last name" inputValue={lastNameValue} getInputValue={setLastNameValue} />
                        <AccountInput title="Display Name" type="text" id="display name" inputValue={displayNameValue} getInputValue={setDisplayNameValue} />
                        <AccountInput title="Email Address" type="email" inputValue={emailValue} getInputValue={setEmailValue} />
                        <AccountInput title="Password" type="password" id="password" inputValue={passwordValue} getInputValue={setPasswordValue} />

                        <div className="accountInfo-inner__check space-between">
                            <input type="checkbox" name="newsletter" id="newsletter" ref={newsletterRef} />
                            <label htmlFor="newsletter">I would like to receieve news, surveys and special offers from Epic Gamse</label>
                        </div>

                        <div className="accountInfo-inner__check space-between">
                            <input type="checkbox" name="service" id="service"  ref={termsOfServiceRef} />
                            <label htmlFor="service">I have read and agree to the terms of service</label>
                        </div>

                        <button className="createAccount-button__active" onClick={getAccountDataHandler}>CONTINUE</button>
                    </form>
                </div>

                <div className="createAccount-info centered-column">
                    <p>Privacy Policy</p>

                    <p>Have an Epic Games Account? <Link to="/log-in">Sign In</Link>{" "}</p>
                </div>
            </div>
        </div>
    );
};

export default AccountInfo;
