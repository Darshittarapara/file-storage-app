import { createAsyncThunk } from "@reduxjs/toolkit";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "FirebaseConfig/FireBaseConfig";
import { setItem } from "utils/Storage";
import { set, ref } from '../../FirebaseConfig/FireBaseConfig'
import { USER, USER_ID } from '../../utils/const.js'
export const userSignUpAction = createAsyncThunk(
    "auth/userSignUpAction",
    async (payload, { dispatch }) => {
        const response = await createUserWithEmailAndPassword(auth, payload.email, payload.password)
        console.log(response?.user?.uid)
        if (response?.user?.uid) {
            setItem(USER, response)
            setItem(USER_ID, response?.user?.uid)
            dispatch(saveUserDetails({
                userId: response?.user?.uid,
                userName: payload.displayName
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
    async ({ userId, userName }) => {
        set(ref(db, `user/${userId}`), {
            displayName: userName,
        })
    }
)