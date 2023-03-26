import { createSlice } from "@reduxjs/toolkit";
import { userSignUpAction } from "./AuthAysncThunk";
import { setAuthError } from "utils/helper";
const initialState = {
    usersDetails: {},
    isAuth: false,
    isLoading: false,
    error: ''
}
const slice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        signUp(state, action) {
            console.log(action);
        }
    },
    extraReducers: (builder) => {
        builder.addCase(userSignUpAction.pending, (state, action) => {
            state.isLoading = true
        }).addCase(userSignUpAction.fulfilled, (state, action) => {
            state.isAuth = true;
            state.isLoading = false;
        }).addCase(userSignUpAction.rejected, (state, action) => {
            state.isLoading = false;
            state.error = setAuthError(action?.error?.message)
        })
    }
});
export const AuthActions = slice.actions;
export const AuthReducer = slice.reducer;