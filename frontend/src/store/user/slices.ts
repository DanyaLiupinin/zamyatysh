import { createSlice } from "@reduxjs/toolkit";

import { userRegisterThunk } from "./thunks";

export const usersState: any = {
    loggedIn: false,
    username: null,
    email: null,
    error: ''
};

export const usersSlice = createSlice({
    name: 'users',
    initialState: usersState,
    reducers: {
        setLoggedIn: (state, action) => {
            state.loggedIn = action.payload;
        },
        clearError: (state) => {
            state.error = '';
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(userRegisterThunk.fulfilled, (state, action) => {
                console.log(action)
                const jwt = action.payload.jwt;
                if (jwt) state.loggedIn = true;
                localStorage.setItem('jwt', jwt);

                state.username = action.payload.username;
                state.email = action.payload.email;
            })
            .addCase(userRegisterThunk.rejected, (state, action) => {
                state.error = action.error.message;
            });
    },
});

