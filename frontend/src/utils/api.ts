import axios from "axios";

import { BASE_URL } from "../constants/constants";

export const getCategories = (query?: any) => {
    return axios
        .get(`${BASE_URL}/api/categories/`, {
            params: query
        })
        .then((res) => { console.log(res) 
            return res.data.data; })
        .catch((err) => console.log(err));
};

export const getItems = (query?: any) => {
    return axios
        .get(`${BASE_URL}/api/items`, {
            params: query
        })
        .then((res) => {
            return res.data.data;
        })
        .catch((err) => console.log(err));
};