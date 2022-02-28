import { createSlice } from "@reduxjs/toolkit";

const accountSlice = createSlice({
    name: "account",
    initialState: {
        loggedIn: false,
        account: {},
        cart: [],
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

        addGamesToCart(state, action) {
            if (!state.loggedIn) return;

            if (state.cart.find(game => game.name === action.payload.name)) return;

            state.cart.push(action.payload);
        },

        removeGamesFromCart(state, action) {
            state.cart = state.cart.filter(game => game.name !== action.payload.name);
        },

        moveGamesToWishlist(state, action) {
            if (!state.loggedIn) return;

            if (state.account.wishlist.find(game => game.name === action.payload.name)) return;

            state.account.wishlist.push(action.payload);
            state.cart = state.cart.filter(game => game.name !== action.payload.name);
        },
    },
});

export const { setAccount, logOutAccount, addGamesToWishlist, removeGamesFromWishlist, addGamesToCart, removeGamesFromCart, moveGamesToWishlist } =
    accountSlice.actions;

export default accountSlice.reducer;
