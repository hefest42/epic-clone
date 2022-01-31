import React, { useState } from "react";

const CreateAccount = () => {
    const [test, setTest] = useState(false);

    return (
        <div className="createAccount centered-column">
            <div className="createAccount-container">
                <form>
                    <div className="createAccount-container__title">
                        <h3>Sign Up</h3>
                    </div>

                    <div className="createAccount-container__text centered">
                        <input type="text" placeholder="Country" />
                    </div>

                    <div className="createAccount-container__text">
                        <label htmlFor="first">
                            First Name <span>*</span>
                        </label>
                        <input type="text" id="first" name="first" />
                    </div>

                    <div className="createAccount-container__text">
                        <label htmlFor="last">
                            Last Name <span>*</span>
                        </label>
                        <input type="text" id="last" name="last" />
                    </div>

                    <div className="createAccount-container__text centered">
                        <label htmlFor="display">
                            Display Name <span>*</span>
                        </label>
                        <input type="text" id="display" name="display" />
                    </div>

                    <div className={test ? "createAccount-container__active" : "createAccount-container__text"}>
                        <label htmlFor="email">
                            Email Address <span>*</span>
                        </label>
                        <input type="text" id="email" name="email" onFocus={() => setTest(true)} onBlur={() => setTest(false)} />
                    </div>

                    <div className="createAccount-container__text centered">
                        <label htmlFor="password">Password</label>
                        <input type="password" autoComplete="on" id="password" name="password" />
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
