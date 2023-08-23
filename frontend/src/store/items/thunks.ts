import { createAsyncThunk } from "@reduxjs/toolkit";

import { getCategories, getItems } from "../../utils/api";

import { getLocale } from "./slices";


export const getAllCategoriesThunk: any = createAsyncThunk(
    'getAllCategories',

    async (_, thunkAPI) => {
        try {
            const locale = getLocale(thunkAPI.getState());
            console.log(locale)
            const response = await getCategories({
                locale: locale,
                fields: ['name', 'slug'],
            });
            console.log(response);
            return response;
        } catch (error) {
            console.log(error);
        }
    }
);

export const getAllItemsThunk: any = createAsyncThunk(
    'getAllItems',

    async (_, thunkAPI) => {
        try {
            const locale = getLocale(thunkAPI.getState());
            const response = await getItems({
                locale: locale,
                populate: '*'
            });
            return response;
        } catch (error) {
            console.log(error);
        }
    }
);

export const getFilteredItemsThunk: any = createAsyncThunk(
    'getFilteredItems',

    async ({slug}: any, thunkAPI) => {
        try {
            const locale = getLocale(thunkAPI.getState());
            const response = await getCategories({
                populate: {
                    items: {
                        populate: '*' // можно подрезать инфу для запроса
                    },
                },
                filters: {
                    slug: slug,
                },
                locale: locale,
            });
            return response;
        } catch (error) {
            console.log(error);
        }
    }
);