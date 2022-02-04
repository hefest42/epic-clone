import React, { useState } from "react";

import DatePicker from "./DatePicker";
import AccountInfo from "./AccountInfo";

const CreateAccount = () => {
    const [pageStep, setPageStep] = useState(1);
    const [yearValue, setYearValue] = useState("test");

    return (
        <div className="createAccount centered">
            {pageStep === 1 && <DatePicker changeStep={setPageStep} getYear={setYearValue} />}
            {pageStep === 2 && <AccountInfo birthYearData={yearValue} />}
        </div>
    );
};

export default CreateAccount;
