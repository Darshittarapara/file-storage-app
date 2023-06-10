import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "FirebaseConfig/FireBaseConfig";
import { UserActions } from "./UserSlice";
import { getItem } from "utils/Storage";

export const getUserProfileAction = createAsyncThunk(
    "users/getUserProfileAction",
    async (payload, { dispatch }) => {
        const auth = getAuth(app);

        onAuthStateChanged(auth, async (user) => {
            await dispatch(UserActions.setLoadingState(true));
            const payload = {
                displayName: '',
                photoURL: ''
            }
            if (user) {
                payload.displayName = user?.displayName;
                payload.photoURL = user?.photoURL
                console.log(user);
                console.log("user");
                console.log(user.displayName);
                await dispatch(UserActions.loadUserData(payload))
                await dispatch(UserActions.setLoadingState(false));
            } else {
                dispatch(UserActions.setLoadingState(false));
            }
        });
    }
)

