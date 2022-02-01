import React, { useRef } from "react";
import { useState } from "react/cjs/react.development";

const AccountInput = ({ title, type, id, inputValue, getInputValue }) => {
    const inputRef = useRef();
    const [isInputFocused, setIsInputFocused] = useState(false);

    return (
        <div className={isInputFocused || inputValue !== "" ? "accountInput-active" : "accountInput-inactive"}>
            <label htmlFor="first">
                {title} <span>*</span>
            </label>
            <input
                type={type}
                id={id}
                name={id}
                autoComplete="on"
                ref={inputRef}
                value={inputValue}
                onFocus={() => setIsInputFocused(true)}
                onBlur={() => setIsInputFocused(false)}
                onChange={e => getInputValue(e.target.value)}
            />
        </div>
    );
};

export default AccountInput;
