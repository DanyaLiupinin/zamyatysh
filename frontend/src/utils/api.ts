import axios from "axios";

import { BASE_URL } from "../constants/constants";


// ITEMS

export const getCategories = (query?: any) => {
    return axios
        .get(`${BASE_URL}/api/categories/`, {
            params: query
        })
        .then((res) => { return res.data.data; })
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

export const getItem = ({ id, locale }: any) => {

    return axios
        .get(`${BASE_URL}/api/items/${id}`, {
            params: {
                locale: locale,
                populate: {
                    image: true,
                    categories: true,
                    sizes: true
                },
            }
        })
        .then((res) => {
            return res.data;
        })
        .catch((err) => console.log(err));
};

export const getUserItem = ({id, locale, jwt}: any) => {

    return axios
        .get(`${BASE_URL}/api/items/${id}`, {
            headers: {
                'Authorization': `Bearer ${jwt}`
            },
            params: {
                locale: locale,
                populate: {
                    image: true,
                    users: true,
                    sizes: true
                },
            }
        })
        .then((res) => {
            return res.data;
        })
        .catch((err) => console.log(err));
}

export const getBasketItem = ({ id, jwt }: any) => {

    return axios
        .get(`${BASE_URL}/api/users/${id}/`, {
            headers: {
                'Authorization': `Bearer ${jwt}`
            },
            params: {
                populate: {
                    items: {
                        populate: '*'
                    }
                }
            }  
        })
        .then((res) => {
            return res.data;
        })
        .catch((err) => console.log(err));
};

// USER

export const userRegister = (data: any) => {
    return axios
        .post(`${BASE_URL}/api/auth/local/register`, data)
        .then((res) => {
            return res.data;
        })
        .catch((err) => {
            return err;
        });
};

export const userLogin = (data: any) => {
    return axios
        .post(`${BASE_URL}/api/auth/local`, data)
        .then((res) => {
            return res.data;
        })
        .catch((err) => {
            return err;
        });
};

export const getUserData = ({ id, jwt }: any) => {
    return axios
        .get(`${BASE_URL}/api/users/${id}`, {

            headers: {
                'Authorization': `Bearer ${jwt}`
            }
        }
        )
        .then((res) => {
            return res.data;
        })
        .catch((err) => {
            return err;
        });
};

