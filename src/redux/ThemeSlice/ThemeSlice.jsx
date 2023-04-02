import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    mode: "light"
}
const slice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleTheme(state) {
            state.mode = state.mode === "light" ? 'dark' : "light"
        },
        resetThemeState(state, action) {
            state.mode = action.payload
        }
    },

});
export const ThemeActions = slice.actions;
export const ThemeReducer = slice.reducer;