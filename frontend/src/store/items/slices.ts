import { createSlice } from "@reduxjs/toolkit";    

export const itemsState: any = {
    categories: null,
    items: null,
};

export const itemsSlice = createSlice({
    name: 'items',
    initialState: itemsState,
    reducers: {

    },
    extraReducers: (builder) => {

    }
});
