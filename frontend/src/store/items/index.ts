import { itemsSlice } from "./slices";
import {
    getAllCategoriesThunk,
    getAllItemsThunk
} from "./thunks";

export const itemsReducer = itemsSlice.reducer;

export const itemsActions = {
    getAllCategoriesThunk,
    getAllItemsThunk,
    ...itemsSlice.actions
};
