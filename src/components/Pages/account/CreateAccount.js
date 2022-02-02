import React, { useRef, useState } from "react";

import AccountInput from "./AccountInput";
import DatePicker from "./DatePicker";

import { ACCOUNTS } from "../../../dummy-server/DUMMY_ACCOUNTS";

// TODO change the way label moves up

const CreateAccount = () => {
    const [pageStep, setPageStep] = useState(1);
    const [firstNameValue, setFirstNameValue] = useState("");
    const [lastNameValue, setLastnameValue] = useState("");
    const [displayNameValue, setDisplayNameValue] = useState("");
    const [emailValue, setEmailValue] = useState("");
    const [passwordValue, setPasswordValue] = useState("");
    const [dateValue, setDateValue] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const newsLetterRef = useRef();
    const termsOfServiceRef = useRef();

    const formSubmitHandler = e => {
        e.preventDefault();

        if (
            firstNameValue.trim() === "" ||
            lastNameValue.trim() === "" ||
            displayNameValue.trim() === "" ||
            emailValue.trim() === "" ||
            passwordValue.trim() === ""
        ) {
            setErrorMessage("Please fill out the form");
            return;
        }

        if (!emailValue.split("").includes("@")) {
            setErrorMessage("Invalid Email Address");
            return;
        }

        if (passwordValue.split("").length <= 4) {
            setErrorMessage("Password must be longer than 4 characters");
            return;
        }

        if (!termsOfServiceRef.current.checked) {
            setErrorMessage("In order to create an Epic Games Account you must agree to our Terms of Service");
            return;
        }

        ACCOUNTS.push({
            firstName: firstNameValue.trim(),
            lastName: lastNameValue.trim(),
            displayName: displayNameValue.trim(),
            emailAddress: emailValue.trim(),
            password: passwordValue.trim(),
            birthDate: dateValue,
            newsletter: newsLetterRef.current.checked,
        });

        console.log(ACCOUNTS);

        setFirstNameValue("");
        setLastnameValue("");
        setDisplayNameValue("");
        setEmailValue("");
        setPasswordValue("");

        setErrorMessage("");
    };

    return (
        <div className="createAccount centered-column">
            {pageStep === 1 && (
                <div className="createAccount-date centered-column">
                    <DatePicker getDateValue={setDateValue} changeStep={setPageStep} />

                    <p>Privacy Policy</p>

                    <p>Have an Epic Games Account? Sign In</p>
                </div>
            )}

            {pageStep === 2 && (
                <div className="createAccount-container">
                    <form onSubmit={formSubmitHandler}>
                        <div className="createAccount-container__title">
                            <h3>Sign Up</h3>
                        </div>

                        <div className="createAccount-error">
                            <p>{errorMessage}</p>
                        </div>

                        <AccountInput title="First Name" type="text" id="first" inputValue={firstNameValue} getInputValue={setFirstNameValue} />
                        <AccountInput title="Last Name" type="text" id="second" inputValue={lastNameValue} getInputValue={setLastnameValue} />
                        <AccountInput
                            title="Display Name"
                            type="text"
                            id="display"
                            inputValue={displayNameValue}
                            getInputValue={setDisplayNameValue}
                        />
                        <AccountInput title="Email Address" type="text" id="email" inputValue={emailValue} getInputValue={setEmailValue} />
                        <AccountInput title="Password" type="password" id="password" inputValue={passwordValue} getInputValue={setPasswordValue} />

                        <div className="createAccount-container__check">
                            <div>
                                <input type="checkbox" id="special offers" name="special offers" ref={newsLetterRef} />
                                <label htmlFor="special offers">I would like to recive news, surveys, and special offers from Epic Games.</label>
                            </div>

                            <div>
                                <input type="checkbox" id="service" name="service" ref={termsOfServiceRef} />
                                <label htmlFor="service">I have read and agree to the terms of service</label>
                            </div>
                        </div>

                        <button className="createAccount-container__button">CONTINUE</button>
                    </form>

                    <p>Privacy Policy</p>

                    <p>Have an Epic Games Account? Sign In</p>
                </div>
            )}
        </div>
    );
};

export default CreateAccount;
