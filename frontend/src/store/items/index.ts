import { itemsSlice } from "./slices";
import {
    getAllCategoriesThunk,
    getAllItemsThunk,
    getFilteredItemsThunk,
} from "./thunks";

export const itemsReducer = itemsSlice.reducer;

export const itemsActions = {
    getAllCategoriesThunk,
    getAllItemsThunk,
    getFilteredItemsThunk,
    ...itemsSlice.actions
};
