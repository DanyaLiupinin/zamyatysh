import { createSlice } from "@reduxjs/toolkit";

import { userRegisterThunk } from "./thunks";

export const usersState: any = {
    loggedIn: false,
    username: null,
    email: null
};

export const usersSlice = createSlice({
    name: 'users',
    initialState: usersState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(userRegisterThunk.fulfilled, (state, action) => {
                const jwt = action.payload.jwt;
                if (jwt) state.loggedIn = true;
                localStorage.setItem('jwt', jwt);

                state.username = action.payload.username;
                state.email = action.payload.email;
            });
    },
});

