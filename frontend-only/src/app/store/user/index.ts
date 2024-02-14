import { usersSlice } from "./slices";
import {
    userRegisterThunk,
    userLoginThunk,
    getUserDataThunk
} from "./thunks";

export const userReducer = usersSlice.reducer;

export const usersActions = {
    userRegisterThunk,
    userLoginThunk,
    getUserDataThunk,
    ...usersSlice.actions
};
