import { createAsyncThunk } from "@reduxjs/toolkit";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "FirebaseConfig/FireBaseConfig";
import { UserActions } from "./UserSlice";

export const getUserProfileAction = createAsyncThunk(
    "users/getUserProfileAction",
    async (payload, { dispatch }) => {
        onAuthStateChanged(auth, (user) => {
            dispatch(UserActions.setLoadingState(true));
            if (user) {
                dispatch(UserActions.loadUserData({
                    displayName: user.displayName,
                    photoURL: user.photoURL
                }))
                dispatch(UserActions.setLoadingState(false));
            } else {
                dispatch(UserActions.setLoadingState(false));
            }
        });
    }
)

