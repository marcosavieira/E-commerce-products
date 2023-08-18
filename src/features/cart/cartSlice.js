import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        value: 0,
        title: "",
        price: 0,
    },

    reducers: {
        addToCart: (state, action) => {
            state.value += action.payload;
        },
        addTitle: (state, action) => {
            state.title = action.payload;
        },
        addPrice: (state, action) => {
            state.price = action.payload;
        },
    },
});

export const { addToCart, addPrice, addTitle } = cartSlice.actions;

export default cartSlice.reducer;
