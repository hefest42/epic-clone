import { createSlice } from "@reduxjs/toolkit";

const accountSlice = createSlice({
    name: "account",
    initialState: {
        loggedIn: false,
        account: {},
    },
    reducers: {
        setAccount(state, action) {
            state.loggedIn = true;
            state.account = action.payload;
        },

        logOutAccount(state) {
            state.loggedIn = false;
            state.account = {};
        },
    },
});

export const { setAccount, logOutAccount } = accountSlice.actions;

export default accountSlice.reducer;
