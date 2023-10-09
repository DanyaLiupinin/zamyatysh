import { itemsSlice } from "./slices";
import {
    getAllCategoriesThunk,
    getAllItemsThunk,
    getFilteredItemsThunk,
    getBasketItemsThunk
} from "./thunks";

export const itemsReducer = itemsSlice.reducer;

export const itemsActions = {
    getAllCategoriesThunk,
    getAllItemsThunk,
    getFilteredItemsThunk,
    getBasketItemsThunk,
    ...itemsSlice.actions
};
