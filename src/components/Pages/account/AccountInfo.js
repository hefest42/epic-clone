import React, { useState } from "react";

import AccountInput from "./AccountInput";

import { Link } from "react-router-dom";

const AccountInfo = () => {
    const [firstNameValue, setFirstNameValue] = useState("");
    const [lastNameValue, setLastNameValue] = useState("");

    //prettier-ignore
    return (
        <div className="accountInfo centered">
            <div className="accountInfo-outer centered-column">
                <div className="accountInfo-inner centered-column">
                    <div className="createAccount-title">Sign In</div>
                    <div className="createAccount-error centered">error message</div>
                    <form action="">
                        <AccountInput title="First Name" type="text" id="first name" inputValue={firstNameValue} getInputValue={setFirstNameValue} />
                        <AccountInput title="Last Name" type="text" id="last name" inputValue={lastNameValue} getInputValue={setLastNameValue} />
                        <AccountInput title="Display Name" type="text" id="display name" inputValue={lastNameValue} getInputValue={setLastNameValue} />
                        <AccountInput title="Email Address" type="email" inputValue={lastNameValue} getInputValue={setLastNameValue} />
                        <AccountInput title="Password" type="password" id="password" inputValue={lastNameValue} getInputValue={setLastNameValue} />

                        <div className="accountInfo-inner__check space-between">
                            <input type="checkbox" name="" id="" />
                            <label htmlFor="">I would like to receieve news, surveys and special offers from Epic Gamse</label>
                        </div>

                        <div className="accountInfo-inner__check space-between">
                            <input type="checkbox" name="" id="" />
                            <label htmlFor="">I have read and agree to the terms of service</label>
                        </div>

                        <button className="createAccount-button__inactive">CONTINUE</button>
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
