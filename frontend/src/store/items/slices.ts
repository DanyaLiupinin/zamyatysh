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
        changeLanguage: (state, action) => {
            state.locale = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAllCategoriesThunk.fulfilled, (state, action) => {
                console.log(action)
            })
    }
});

export const getLocale = (state: any) => state.items.locale
