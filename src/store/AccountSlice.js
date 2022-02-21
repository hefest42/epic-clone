import { createSlice, current } from "@reduxjs/toolkit";

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
            if (!state.loggedIn) return;

            if (state.account.wishlist.find(game => game.name === action.payload.name)) return;

            state.account.wishlist.push(action.payload);
        },

        removeGamesFromWishlist(state, action) {
            state.account.wishlist = state.account.wishlist.filter(game => game.name !== action.payload.name);
        },
    },
});

export const { setAccount, logOutAccount, addGamesToWishlist, removeGamesFromWishlist } = accountSlice.actions;

export default accountSlice.reducer;
