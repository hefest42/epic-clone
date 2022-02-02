import React, { useRef } from "react";
import { useState } from "react/cjs/react.development";

import { shortMonths, numberOfDays } from "../../../store/helperFunctions";

const DatePicker = ({ getDateValue, changeStep }) => {
    const [errorMessage, setErrorMessage] = useState("");
    const [showDays, setShowDays] = useState(false);
    const [numberOfDaysInMonth, setNumberOfDaysInMonth] = useState(31);
    const [showMonth, setShowMonths] = useState(false);
    const [dayValue, setDayValue] = useState("Day");
    const [monthValue, setMonthValue] = useState("Month");
    const [yearValue, setYearValue] = useState("");
    const yearInputRef = useRef();

    const dateHandler = () => {
        setErrorMessage("");
        const month = shortMonths.findIndex(month => month === monthValue) + 1;

        if (monthValue === "Month") {
            setErrorMessage("Please select a month.");
            return;
        }

        if (dayValue === "Day") {
            setErrorMessage("Please select a day.");
            return;
        }

        if (!/\d/.test(yearValue)) {
            setErrorMessage("Please input a valid year.");
            return;
        }

        getDateValue(`${yearValue}/${String(month).padStart(2, 0)}/${dayValue}`);

        setDayValue("Day");
        setMonthValue("Month");
        setYearValue("");

        changeStep(2);
    };

    const changeNumberOfDaysInMonth = monthValue => {
        if (monthValue === "Sep" || monthValue === "Apr" || monthValue === "Jun" || monthValue === "Nov") setNumberOfDaysInMonth(30);
        else if (monthValue === "Feb") setNumberOfDaysInMonth(28);
        else setNumberOfDaysInMonth(31);
    };

    return (
        <div className="datePicker centered-column">
            <h4>Enter Your Date of Birth</h4>

            <div className="createAccount-error">
                <p>{errorMessage}</p>
            </div>

            <div className="datePicker-container space-between">
                <div className="datePicker-container__select">
                    <button
                        className="datePicker-container__button"
                        onClick={() => {
                            setShowMonths(true);
                            setShowDays(false);
                        }}
                    >
                        {monthValue}
                    </button>
                    {showMonth && (
                        <ul className="datePicker-container__list">
                            {shortMonths.map((month, i) => (
                                <li
                                    key={i}
                                    onClick={() => {
                                        setMonthValue(month);
                                        setShowMonths(false);
                                        changeNumberOfDaysInMonth(month);
                                    }}
                                >
                                    {month}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                <div className="datePicker-container__select">
                    <button
                        className="datePicker-container__button"
                        onClick={() => {
                            setShowDays(true);
                            setShowMonths(false);
                        }}
                    >
                        {dayValue}
                    </button>
                    {showDays && (
                        <ul className="datePicker-container__list">
                            {numberOfDays.slice(0, numberOfDaysInMonth).map((day, i) => (
                                <li
                                    key={i}
                                    onClick={() => {
                                        setDayValue(day);
                                        setShowDays(false);
                                    }}
                                >
                                    {i + 1}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                <div className="datePicker-container__year">
                    <input
                        type="tel"
                        pattern="[0-9]{4}"
                        placeholder="Year"
                        maxLength="4"
                        ref={yearInputRef}
                        value={yearValue}
                        onChange={e => setYearValue(e.target.value)}
                    />
                </div>
            </div>
            <button className="datePicker-button" onClick={dateHandler}>
                CONTINUE
            </button>
        </div>
    );
};

export default DatePicker;
