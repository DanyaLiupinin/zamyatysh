import { createSlice } from "@reduxjs/toolkit";

import { getAllCategoriesThunk } from "./thunks";

export const itemsState: any = {
    categories: null,
    items: null,
    locale: 'ru'
};

export const itemsSlice = createSlice({
    name: 'items',
    initialState: itemsState,
    reducers: {
        test: (state, action) => {
            state.categories = action.payload
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAllCategoriesThunk.fulfilled, (state, action) => {
                console.log(action)
            })
    }
});

export const getLocale = (state: any) => state.itemsState.locale
