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

        addGamesToWishlist(state, action) {
            console.log("wishlist pressed");

            if (!state.loggedIn) return;

            console.log("game added to wishlist");

            state.account.wishlist.push(action.payload);
        },
    },
});

export const { setAccount, logOutAccount, addGamesToWishlist } = accountSlice.actions;

export default accountSlice.reducer;
