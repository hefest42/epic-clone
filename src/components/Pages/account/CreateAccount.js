import React, { useState } from "react";

// TODO change the way label moves up
// TODO refactor the component with multiple input components
const CreateAccount = () => {
    const [enteredFirstName, setEnteredFirstName] = useState({
        focus: false,
        emailText: "",
        error: "",
    });
    const [enteredLastName, setEnteredLastName] = useState({
        focus: false,
        emailText: "",
        error: "",
    });
    const [enteredDisplayName, setEnteredDisplayName] = useState({
        focus: false,
        emailText: "",
        error: "",
    });
    const [enteredEmail, setEnteredEmail] = useState({
        focus: false,
        emailText: "",
        error: "",
    });
    const [enteredPassword, setEnteredPassword] = useState({
        focus: false,
        emailText: "",
        error: "",
    });

    return (
        <div className="createAccount centered-column">
            <div className="createAccount-container">
                <form>
                    <div className="createAccount-container__title">
                        <h3>Sign Up</h3>
                    </div>

                    <div
                        className={
                            enteredFirstName.focus || enteredFirstName.emailText !== ""
                                ? "createAccount-container__active"
                                : "createAccount-container__text"
                        }
                    >
                        <label htmlFor="first">
                            First Name <span>*</span>
                        </label>
                        <input
                            type="text"
                            id="first"
                            name="first"
                            onFocus={() =>
                                setEnteredFirstName(state => ({
                                    ...state,
                                    focus: true,
                                }))
                            }
                            onBlur={() =>
                                setEnteredFirstName(state => ({
                                    ...state,
                                    focus: false,
                                }))
                            }
                            onChange={e =>
                                setEnteredFirstName(state => ({
                                    ...state,
                                    emailText: e.target.value,
                                }))
                            }
                        />
                    </div>

                    <div
                        className={
                            enteredLastName.focus || enteredLastName.emailText !== ""
                                ? "createAccount-container__active"
                                : "createAccount-container__text"
                        }
                    >
                        <label htmlFor="last">
                            Last Name <span>*</span>
                        </label>
                        <input
                            type="text"
                            id="last"
                            name="last"
                            onFocus={() =>
                                setEnteredLastName(state => ({
                                    ...state,
                                    focus: true,
                                }))
                            }
                            onBlur={() =>
                                setEnteredLastName(state => ({
                                    ...state,
                                    focus: false,
                                }))
                            }
                            onChange={e =>
                                setEnteredLastName(state => ({
                                    ...state,
                                    emailText: e.target.value,
                                }))
                            }
                        />
                    </div>

                    <div
                        className={
                            enteredDisplayName.focus || enteredDisplayName.emailText !== ""
                                ? "createAccount-container__active"
                                : "createAccount-container__text"
                        }
                    >
                        <label htmlFor="display">
                            Display Name <span>*</span>
                        </label>
                        <input
                            type="text"
                            id="display"
                            name="display"
                            onFocus={() =>
                                setEnteredDisplayName(state => ({
                                    ...state,
                                    focus: true,
                                }))
                            }
                            onBlur={() =>
                                setEnteredDisplayName(state => ({
                                    ...state,
                                    focus: false,
                                }))
                            }
                            onChange={e =>
                                setEnteredDisplayName(state => ({
                                    ...state,
                                    emailText: e.target.value,
                                }))
                            }
                        />
                    </div>

                    <div
                        className={
                            enteredEmail.focus || enteredEmail.emailText !== "" ? "createAccount-container__active" : "createAccount-container__text"
                        }
                    >
                        <label htmlFor="email">
                            Email Address <span>*</span>
                        </label>
                        <input
                            type="text"
                            id="email"
                            name="email"
                            onFocus={() =>
                                setEnteredEmail(state => ({
                                    ...state,
                                    focus: true,
                                }))
                            }
                            onBlur={() =>
                                setEnteredEmail(state => ({
                                    ...state,
                                    focus: false,
                                }))
                            }
                            onChange={e =>
                                setEnteredEmail(state => ({
                                    ...state,
                                    emailText: e.target.value,
                                }))
                            }
                        />
                    </div>

                    <div
                        className={
                            enteredPassword.focus || enteredPassword.emailText !== ""
                                ? "createAccount-container__active"
                                : "createAccount-container__text"
                        }
                    >
                        <label htmlFor="password">
                            Password <span>*</span>
                        </label>
                        <input
                            type="password"
                            autoComplete="on"
                            id="password"
                            name="password"
                            onFocus={() =>
                                setEnteredPassword(state => ({
                                    ...state,
                                    focus: true,
                                }))
                            }
                            onBlur={() =>
                                setEnteredPassword(state => ({
                                    ...state,
                                    focus: false,
                                }))
                            }
                            onChange={e =>
                                setEnteredPassword(state => ({
                                    ...state,
                                    emailText: e.target.value,
                                }))
                            }
                        />
                    </div>

                    <div className="createAccount-container__check">
                        <div>
                            <input type="checkbox" id="special offers" name="special offers" />
                            <label htmlFor="special offers">I would like to recive news, surveys, and special offers from Epic Games.</label>
                        </div>

                        <div>
                            <input type="checkbox" id="service" name="service" />
                            <label htmlFor="service">I have read and agree to the terms of service</label>
                        </div>
                    </div>

                    <button>CONTINUE</button>
                </form>

                <p>Privacy Policy</p>

                <p>Have an Epic Games Account? Sign In</p>
            </div>
        </div>
    );
};

export default CreateAccount;
