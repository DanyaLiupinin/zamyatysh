import { createAsyncThunk } from "@reduxjs/toolkit";

import { getAllCategories } from "../../utils/api";

import { getLocale } from "./slices";

export const getAllCategoriesThunk: any = createAsyncThunk(
    'getAllCategories',

    async () => {
        try {
            const response = await getAllCategories({
                fields: ['name'],
                //locale: getLocale
            });
            return response;
        } catch (error) {
            console.log(error);
        }
    }
);