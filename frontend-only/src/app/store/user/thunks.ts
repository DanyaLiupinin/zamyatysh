import { createAsyncThunk } from "@reduxjs/toolkit";

import { userRegister, userLogin, getUserData } from "@api";

export const userRegisterThunk: any = createAsyncThunk(
    'userRegister',

    async (userData: any) => {
        try {
            const response = await userRegister(userData);

            if (response.response && 
                response.response.status && 
                response.response.status === 400) {
                return Promise.reject(response.response.data.error.message);
            } else {
                return response;
            }

        } catch (error) {
            return error;
        }
    }
);

export const userLoginThunk: any = createAsyncThunk(
    'userLogin',

    async (userData: any) => {
        try {
            const response = await userLogin(userData);

            if (response.response && 
                response.response.status && 
                response.response.status === 400) {
                return Promise.reject(response.response.data.error.message);
            } else {
                return response;
            }

        } catch (error) {
            return error;
        }
    }
);

export const getUserDataThunk: any = createAsyncThunk(
    'getUserData',

    async (id: any) => {
        try {
            const response = await getUserData({
                id,
                jwt: localStorage.getItem("jwt")
            });

            if (response.response && 
                response.response.status && 
                response.response.status === 400) {
                return Promise.reject(response.response.data.error.message);
            } else {
                return response;
            }

        } catch (error) {
            return error;
        }
    }
);

