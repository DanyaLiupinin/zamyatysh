import { usersSlice } from "./slices";
import {
    userRegisterThunk
} from "./thunks";

export const userReducer = usersSlice.reducer;

export const usersActions = {
    userRegisterThunk,
    ...usersSlice.actions
};
