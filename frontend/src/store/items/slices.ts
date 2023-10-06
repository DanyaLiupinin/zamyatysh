import { createSlice } from "@reduxjs/toolkit";

import { getAllCategoriesThunk, getAllItemsThunk, getFilteredItemsThunk } from "./thunks";

export const itemsState: any = {
    categories: null,
    items: null,
    activeCategoryFilter: null,
    locale: null, // perenesti v usera
    basket: null,
};

export const itemsSlice = createSlice({
    name: 'items',
    initialState: itemsState,
    reducers: {
        changeLanguage: (state, action) => {
            state.locale = action.payload;
        },
        setCategoryFilter: (state, action) => {
            state.activeCategoryFilter = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAllCategoriesThunk.fulfilled, (state, action) => {
                state.categories = action.payload;
            });
        builder
            .addCase(getAllItemsThunk.fulfilled, (state, action) => {
                state.items = action.payload;
            });
        builder
            .addCase(getFilteredItemsThunk.fulfilled, (state, action) => {
                state.activeCategoryFilter = action.payload[0].id;
                state.items = action.payload[0].attributes.items.data;
            });
    },
});

export const getLocale = (state: any) => state.items.locale;
