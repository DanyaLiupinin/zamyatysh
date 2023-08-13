import { itemsSlice } from "./slices";

export const ingredientsState = itemsSlice.reducer;

export const ingredientsActions = {
    ...itemsSlice.actions
};
