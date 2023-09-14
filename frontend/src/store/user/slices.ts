import { createSlice } from "@reduxjs/toolkit";

import { userRegisterThunk, userLoginThunk } from "./thunks";




export const usersState: any = {
    loggedIn: false,
    username: null,
    email: null,
    error: '',
    rediretcPath: null
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

                state.rediretcPath = '/shop';
            })
            .addCase(userRegisterThunk.rejected, (state, action) => {
                state.error = action.error.message;
            });

        builder
        .addCase(userLoginThunk.fulfilled, (state, action) => {
            const jwt = action.payload.jwt;
            if (jwt) state.loggedIn = true;
            localStorage.setItem('jwt', jwt);

            state.username = action.payload.username;
            state.identifier = action.payload.identifier;

            state.rediretcPath = '/shop';
        })
        .addCase(userLoginThunk.rejected, (state, action) => {
            state.error = action.error.message;
        });
    },
});

