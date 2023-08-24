import { usersSlice } from "./slices";
/*import {

} from "./thunks";*/

export const usersReducer = usersSlice.reducer;

export const usersActions = {
    ...usersSlice.actions
};
