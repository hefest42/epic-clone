import React, { useState } from "react";

import DatePicker from "./DatePicker";
import AccountInfo from "./AccountInfo";

import { ACCOUNTS } from "../../../dummy-server/DUMMY_ACCOUNTS";

// TODO change the way label moves up

const CreateAccount = () => {
    const [pageStep, setPageStep] = useState(2);
    const [yearValue, setYearValue] = useState("test");

    return (
        <div className="createAccount centered">
            {pageStep === 1 && <DatePicker changeStep={setPageStep} getYear={setYearValue} />}
            {pageStep === 2 && <AccountInfo />}
        </div>
    );
};

export default CreateAccount;
