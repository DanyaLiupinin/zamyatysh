import { itemsSlice } from "./slices";
import { getAllCategoriesThunk } from "./thunks";

export const itemsReducer = itemsSlice.reducer;

export const itemsActions = {
    getAllCategoriesThunk,
    ...itemsSlice.actions
};
