import { createSlice } from "@reduxjs/toolkit";
import { getUserProfileAction } from "./UserAysncThunk";
import { setAuthError } from "utils/helper";
const initialState = {
    userDetails: {},
    isLoading: false,
}
const slice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setLoadingState(state, { payload }) {
            state.isLoading = payload
        },
        loadUserData(state, { payload }) {
            console.log(payload)
            state.userDetails = payload
        },
        resetErrorState(state) {
            state.error = ''
        },
        resetState(state) {
            state.userDetails = {}
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