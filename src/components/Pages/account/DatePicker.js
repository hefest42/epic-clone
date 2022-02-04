import React, { useState } from "react";

import { Link } from "react-router-dom";

import { shortMonths, numberOfDays } from "../../../store/helperFunctions";

const DatePicker = ({ changeStep, getYear }) => {
    const [errorMessage, setErrorMessage] = useState("");
    const [numberOfDaysInMonth, setNumberOfDaysInMonth] = useState(31);
    const [showDaysList, setShowDaysList] = useState(false);
    const [showMonthList, setShowMonthList] = useState(false);

    const [monthValue, setMonthValue] = useState("Month");
    const [dayValue, setDayValue] = useState("Day");
    const [yearValue, setYearValue] = useState("");

    const hideLists = e => {
        if (e.target === e.currentTarget) {
            setShowMonthList(false);
            setShowDaysList(false);
        }
    };

    const getDateHandler = () => {
        if (!yearValue.match(".*[^a-z].*")) {
            setErrorMessage("Please input a valid year");
            setYearValue("");
            return;
        }

        if (yearValue.split("").length < 3) {
            setErrorMessage("Please input a valid 4 digit year.");
            return;
        }

        const numericMonth = String(shortMonths.findIndex(month => month === monthValue) + 1).padStart(2, 0);

        getYear(`${yearValue}/${numericMonth}/${dayValue}`);

        setMonthValue("Month");
        setDayValue("Day");
        setYearValue("");
        setErrorMessage("");
        changeStep(2);
    };

    const numberOfDaysInMonthHanlder = month => {
        if (month === "Apr" || month === "Jun" || month === "Sep" || month === "Nov") setNumberOfDaysInMonth(30);
        else if (month === "Feb") setNumberOfDaysInMonth(28);
        else setNumberOfDaysInMonth(31);
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
                                {monthValue}
                            </button>
                            {showMonthList && (
                                <ul className="datePicker-inner__input-months">
                                    {shortMonths.map((month, i) => (
                                        <li
                                            className="centered"
                                            key={i}
                                            onClick={() => {
                                                setShowMonthList(false);
                                                numberOfDaysInMonthHanlder(month);
                                                setMonthValue(month);
                                            }}
                                        >
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
                                {dayValue}
                            </button>
                            {showDaysList && (
                                <ul className="datePicker-inner__input-list">
                                    {numberOfDays.slice(0, numberOfDaysInMonth).map((day, i) => (
                                        <li
                                            className="centered"
                                            key={i}
                                            onClick={() => {
                                                setShowDaysList(false);
                                                setDayValue(day);
                                            }}
                                        >
                                            {i + 1}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>

                        <div className="datePicker-inner__input">
                            <input type="tel" maxLength="4" placeholder="Year" onChange={e => setYearValue(e.target.value)} />
                        </div>
                    </div>

                    <button
                        className={
                            dayValue !== "Day" && (monthValue !== "Month") & (yearValue !== "")
                                ? "createAccount-button__active"
                                : "createAccount-button__inactive"
                        }
                        onClick={getDateHandler}
                    >
                        CONTINUE
                    </button>

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
