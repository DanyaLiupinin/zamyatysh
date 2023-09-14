import { usersSlice } from "./slices";
import {
    userRegisterThunk,
    userLoginThunk
} from "./thunks";

export const userReducer = usersSlice.reducer;

export const usersActions = {
    userRegisterThunk,
    userLoginThunk,
    ...usersSlice.actions
};
