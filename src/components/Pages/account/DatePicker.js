import React, { useRef } from "react";
import { useState } from "react/cjs/react.development";

import { shortMonths, numberOfDays } from "../../../store/helperFunctions";

// TODO check if inputs empty
// TODO make a error message
// TODO
const DatePicker = ({ getDateValue }) => {
    const [showDays, setShowDays] = useState(false);
    const [showMonth, setShowMonths] = useState(false);
    const [dayValue, setDayValue] = useState("Day");
    const [monthValue, setMonthValue] = useState("Month");
    const [yearValue, setYearValue] = useState("");
    const yearInputRef = useRef();

    const dateHandler = () => {
        const month = shortMonths.findIndex(month => month === monthValue) + 1;

        if (!/\d/.test(yearValue)) return;

        getDateValue(`${yearValue}/${String(month).padStart(2, 0)}/${dayValue}`);

        setDayValue("Day");
        setMonthValue("Month");
        setYearValue("");
    };

    return (
        <div className="datePicker centered-column">
            <h4>Enter Your Date of Birth</h4>

            <div className="datePicker-container space-between">
                <div className="datePicker-container__select">
                    <button
                        className="datePicker-container__button"
                        onClick={() => {
                            setShowMonths(true);
                            setShowDays(false);
                        }}
                    >
                        {monthValue} <span>{">"}</span>
                    </button>
                    {showMonth && (
                        <ul className="datePicker-container__list">
                            {shortMonths.map((month, i) => (
                                <li
                                    key={i}
                                    onClick={() => {
                                        setMonthValue(month);
                                        setShowMonths(false);
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
                        {dayValue} <span>{">"}</span>
                    </button>
                    {showDays && (
                        <ul className="datePicker-container__list">
                            {numberOfDays.map((day, i) => (
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
