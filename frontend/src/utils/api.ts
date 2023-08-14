import axios from "axios";

const BASE_URL = 'http://localhost:1337/api'

export const getAllCategories = (query?: any) => {
    return axios
        .get(`${BASE_URL}/categories/`, {
            params: query
        })
        .then((res) => { return res.data.data; })
        .catch((err) => console.log(err));
};

export const getItems = () => {
    return axios
        .get(`${BASE_URL}/items?populate=*`, {
            params: {
                "category.slug": 'tshirt'
            }
        })
        .then((res) => {
            return res.data.data
        })
        .catch((err) => console.log(err));
};