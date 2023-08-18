import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
    name: "modals",
    initialState: {
        modalCart: false,
        modalMenu: false,
    },

    reducers: {
        openModalCart: (state) => {
            state.modalCart = true;
        },
        openModalMenu: (state) => {
            state.modalMenu = true;
        },
        closeModalCart: (state) => {
            state.modalCart = false;
        },
        closeModalMenu: (state) => {
            state.modalMenu = false;
        },
    },
});

export const { openModalCart, openModalMenu, closeModalCart, closeModalMenu } =
    modalSlice.actions;

export default modalSlice.reducer;
