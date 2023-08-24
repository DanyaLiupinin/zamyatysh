import { createAsyncThunk } from "@reduxjs/toolkit";

import { userRegister } from "../../utils/api";

export const userRegisterThunk: any = createAsyncThunk(
    'userRegister',

    async (userData: any) => {
        try {
            const response = await userRegister(userData);
            return response;
        } catch (error) {
            console.log(error);
        }
    }
);