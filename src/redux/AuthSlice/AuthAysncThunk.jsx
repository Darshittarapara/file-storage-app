import { createAsyncThunk } from "@reduxjs/toolkit";
import { config } from "config/config";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, sendSignInLinkToEmail } from "FirebaseConfig/FireBaseConfig";
import { setItem } from "utils/Storage";
import { USER, USER_ID, VERIFY_EMAIL } from '../../utils/const.js'
export const userSignUpAction = createAsyncThunk(
    "auth/userSignUpAction",
    async (payload, { dispatch }) => {
        const response = await createUserWithEmailAndPassword(auth, payload.email, payload.password)
        if (response?.user?.uid) {
            setItem(USER, response)
            setItem(USER_ID, response?.user?.uid)
            dispatch(saveUserDetails({
                currentUser: response?.user,
                userId: response?.user?.uid,
                userName: payload.displayName,
                pictureURL: payload?.pictureURL
            }))
            return {
                status: true
            }
        }
        return {
            status: false
        }
    }
)

const saveUserDetails = createAsyncThunk(
    "auth/saveUserDetails",
    async ({ currentUser, userId, userName, pictureURL }) => {
        updateProfile(currentUser, {
            displayName: userName,
            photoURL: pictureURL
        }).then((res) => {
        }).catch((error) => console.log(error))
    }
)
const actionCodeSettings = {
    // URL you want to redirect back to. The domain (www.example.com) for this
    // URL must be in the authorized domains list in the Firebase Console.
    url: config.authEmailVerifyURL,
    // This must be true.
    handleCodeInApp: true,

};

export const emailVerifyAcion = createAsyncThunk(
    "auth/userSignUpAction",
    async (payload, { dispatch }) => {
        await sendSignInLinkToEmail(auth, payload, actionCodeSettings)
        setItem(VERIFY_EMAIL, payload);
        return true
    }
)

export const userSignInWithPasswordAction = createAsyncThunk(
    "auth/userSignInWithPasswordAction",
    async (payload, { dispatch }) => {
        const response = await signInWithEmailAndPassword(auth, payload.email, payload.password)
        if (response?.user?.uid) {
            setItem(USER, response)
            setItem(USER_ID, response?.user?.uid)
            return {
                status: true
            }
        }
        return {
            status: false
        }
    }
)
