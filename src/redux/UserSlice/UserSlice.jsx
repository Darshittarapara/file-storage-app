import { createSlice } from "@reduxjs/toolkit";
import { getUserProfileAction } from "./UserAysncThunk";
import { setAuthError } from "utils/helper";
const initialState = {
    usersDetails: {},
    isLoading: false,
}
const slice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        resetErrorState(state) {
            state.error = ''
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getUserProfileAction.pending, (state, action) => {
            state.isLoading = true
        }).addCase(getUserProfileAction.fulfilled, (state, action) => {
            state.usersDetails = action.payload
            state.isLoading = false;
        }).addCase(getUserProfileAction.rejected, (state, action) => {
            state.isLoading = false;
            state.error = setAuthError(action?.error?.message)
        })
    }
});
export const UserActions = slice.actions;
export const UserReducer = slice.reducer;