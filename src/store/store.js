import { configureStore } from "@reduxjs/toolkit";

import AccountSlice from "./AccountSlice";

export const store = configureStore({
    reducer: {
        loggedInAccount: AccountSlice,
    },
});
