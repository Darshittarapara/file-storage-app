import { createAsyncThunk } from "@reduxjs/toolkit";
import { get } from "firebase/database";
import { db, ref } from "FirebaseConfig/FireBaseConfig";

export const getUserProfileAction = createAsyncThunk(
    "users/getUserProfileAction",
    async (payload, { dispatch }) => {
        const response = await get(ref(db, `user/${payload}`))
        if (response.exists()) {
            return {
                status: true,
                ...response.val()
            }
        }
        return {
            status: false
        }
    }
)

