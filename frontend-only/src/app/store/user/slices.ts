import { createSlice } from "@reduxjs/toolkit";

import { userRegisterThunk, userLoginThunk, getUserDataThunk } from "./thunks";
import { IUsersState } from "@types";

export const usersState: IUsersState = {
    loggedIn: false,
    username: null,
    id: null,
    email: null,
    error: '',
    redirectPath: null
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
        },
        setRedirectPath: (state, action) => {
            state.redirectPath = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(userRegisterThunk.fulfilled, (state, action) => {
                const jwt = action.payload.jwt;
                if (jwt) state.loggedIn = true;
                localStorage.setItem('jwt', jwt);
                localStorage.setItem('userId', action.payload.user.id);

                state.username = action.payload.user.username;
                state.email = action.payload.email;
                state.id = action.payload.user.id;

                state.redirectPath = '/shop';
            })
            .addCase(userRegisterThunk.rejected, (state, action) => {
                state.error = action.error.message;
            });

        builder
            .addCase(userLoginThunk.fulfilled, (state, action) => {
                const jwt = action.payload.jwt;
                if (jwt) state.loggedIn = true;
                localStorage.setItem('jwt', jwt);
                localStorage.setItem('userId', action.payload.user.id);


                state.username = action.payload.user.username;
                state.email = action.payload.email;
                state.id = action.payload.user.id;

                state.redirectPath = '/shop';
            })
            .addCase(userLoginThunk.rejected, (state, action) => {
                state.error = action.error.message;
            });
        builder
            .addCase(getUserDataThunk.fulfilled, (state, action) => {
                state.username = action.payload.username;
                state.email = action.payload.email;
                state.id = action.payload.id;
                state.loggedIn = true;
            });
    },
});

export const getUserId = (state: any) => state.users;

