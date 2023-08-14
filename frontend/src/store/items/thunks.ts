import { createAsyncThunk } from "@reduxjs/toolkit";

import { getAllCategories } from "../../utils/api";

import { getLocale } from "./slices";


export const getAllCategoriesThunk: any = createAsyncThunk(
    'getAllCategories',

    async (_, thunkAPI) => {
        try {
            const locale = getLocale(thunkAPI.getState())
            const response = await getAllCategories({
                fields: ['name', 'slug'],
                locale: locale
            });
            return response;
        } catch (error) {
            console.log(error);
        }
    }
);