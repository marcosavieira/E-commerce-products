import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import cartReducer from "../features/cart/cartSlice";
import modalReducer from "../features/modal/modalSlice";

export default configureStore({
    reducer: {
        counter: counterReducer,
        cart: cartReducer,
        modal: modalReducer,
    },
});
