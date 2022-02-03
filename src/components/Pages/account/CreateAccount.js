import React, { useState } from "react";

import DatePicker from "./DatePicker";

import { ACCOUNTS } from "../../../dummy-server/DUMMY_ACCOUNTS";

// TODO change the way label moves up

const CreateAccount = () => {
    const [pageStep, setPageStep] = useState(1);
    const [yearValue, setYearValue] = useState();

    return (
        <div className="createAccount centered">
            {pageStep === 1 && <DatePicker changeStep={setPageStep} getYear={setYearValue} />}
            {pageStep === 2 && <div></div>}
        </div>
    );
};

export default CreateAccount;
