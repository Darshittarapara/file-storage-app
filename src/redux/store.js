import { configureStore } from "@reduxjs/toolkit";
import { AuthReducer } from "./AuthSlice/AuthSlice";
import { ThemeReducer } from "./ThemeSlice/ThemeSlice";
import { UserReducer } from "./UserSlice/UserSlice";

const store = configureStore({
    reducer: {
        AuthStateData: AuthReducer,
        ToggleStateData: ThemeReducer,
        UserStateData: UserReducer
    }
});
export default store;