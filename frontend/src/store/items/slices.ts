import { createSlice } from "@reduxjs/toolkit";

import { getAllCategoriesThunk, getAllItemsThunk } from "./thunks";

export const itemsState: any = {
    categories: null,
    items: null,
    locale: null
};

export const itemsSlice = createSlice({
    name: 'items',
    initialState: itemsState,
    reducers: {
        changeLanguage: (state, action) => {
            state.locale = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAllCategoriesThunk.fulfilled, (state, action) => {
                state.categories = action.payload;
            })
        builder
            .addCase(getAllItemsThunk.fulfilled, (state, action) => {
                console.log(action.payload)
                state.items = action.payload;
            })
    }
});

export const getLocale = (state: any) => state.items.locale
