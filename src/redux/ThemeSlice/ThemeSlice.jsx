import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    mode: "light"
}
const slice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        toggleTheme(state) {
            state.mode = state.mode === "light" ? 'dark' : "light"
        }
    },

});
export const ToggleActions = slice.actions;
export const ToggleReducer = slice.reducer;