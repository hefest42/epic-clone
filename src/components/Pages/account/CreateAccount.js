import React, { useRef, useState } from "react";

import AccountInput from "./AccountInput";
import DatePicker from "./DatePicker";

import { ACCOUNTS } from "../../../dummy-server/DUMMY_ACCOUNTS";

// TODO change the way label moves up

const CreateAccount = () => {
    const [pageStep, setPageStep] = useState(1);

    return (
        <div className="createAccount centered">
            {pageStep === 1 && <DatePicker />}
            {pageStep === 2 && <div></div>}
        </div>
    );
};

export default CreateAccount;
