import { createAsyncThunk } from "@reduxjs/toolkit";

import { getCategories, getItems, getBasketItem, getUserItem } from "../../utils/api";

import { getLocale } from "./slices";

import { getUserId } from "../user/slices";


export const getAllCategoriesThunk: any = createAsyncThunk(
    'getAllCategories',

    async (_, thunkAPI) => {
        try {
            const locale = getLocale(thunkAPI.getState());
            const response = await getCategories({
                locale: locale,
            });
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

    async (id: any, thunkAPI) => {
        try {
            const locale = getLocale(thunkAPI.getState());
            const response = await getCategories({
                populate: {
                    items: {
                        populate: '*' // можно подрезать инфу для запроса
                    },
                },
                filters: {
                    id: id,
                },
                locale: locale,
            });
            return response;
        } catch (error) {
            console.log(error);
        }
    }
);



