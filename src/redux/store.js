import { configureStore } from "@reduxjs/toolkit";
import { AuthReducer } from "./AuthSlice/AuthSlice";
import { ToggleReducer } from "./ThemeSlice/ThemeSlice";

const store = configureStore({
    reducer: {
        AuthStateData: AuthReducer,
        ToggleStateData: ToggleReducer
    }
});
export default store;