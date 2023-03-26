import { configureStore } from "@reduxjs/toolkit";
import { AuthReducer } from "./AuthSlice/AuthSlice";

const store = configureStore({
    reducer: {
        AuthStateData: AuthReducer
    }
});
export default store;