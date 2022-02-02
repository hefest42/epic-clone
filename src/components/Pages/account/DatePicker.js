import React, { useState } from "react";

import { Link } from "react-router-dom";

import { shortMonths, numberOfDays } from "../../../store/helperFunctions";

// TODO get the info for the date inputed
// TODO send it to the parent
const DatePicker = ({ showDay, showDayHandler, showMonth, showMonthHandler }) => {
    const [errorMessage, setErrorMessage] = useState("");
    const [showDaysList, setShowDaysList] = useState(false);
    const [showMonthList, setShowMonthList] = useState(false);

    const hideLists = e => {
        if (e.target === e.currentTarget) {
            setShowMonthList(false);
            setShowDaysList(false);
        }
    };

    return (
        <div className="datePicker centered" onClick={e => hideLists(e)}>
            <div className="datePicker-outer centered" onClick={e => hideLists(e)}>
                <div className="datePicker-inner centered-column" onClick={e => hideLists(e)}>
                    <div className="createAccount-title">Enter Your Date of Birth</div>

                    <div className={errorMessage === "" ? "" : "createAccount-error centered"}>{errorMessage}</div>

                    <div className="datePicker-inner__inputs space-between">
                        <div className="datePicker-inner__input">
                            <button
                                onClick={e => {
                                    if (e.target === e.currentTarget) {
                                        setShowMonthList(true);
                                        setShowDaysList(false);
                                    }
                                }}
                            >
                                Month
                            </button>
                            {showMonthList && (
                                <ul className="datePicker-inner__input-months">
                                    {shortMonths.map((month, i) => (
                                        <li className="centered" key={i}>
                                            {month}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>

                        <div className="datePicker-inner__input">
                            <button
                                onClick={e => {
                                    if (e.target === e.currentTarget) {
                                        setShowMonthList(false);
                                        setShowDaysList(true);
                                    }
                                }}
                            >
                                Day
                            </button>
                            {showDaysList && (
                                <ul className="datePicker-inner__input-list">
                                    {numberOfDays.map((day, i) => (
                                        <li className="centered" key={i}>
                                            {i + 1}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>

                        <div className="datePicker-inner__input">
                            <input type="tel" maxLength="4" placeholder="Year" />
                        </div>
                    </div>

                    <button className="createAccount-button__inactive">CONTINUE</button>

                    <div className="createAccount-info centered-column">
                        <p>Privacy Policy</p>
                        <p>
                            Have an Epic Games Account? <Link to="/log-in">Sign In</Link>{" "}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DatePicker;
