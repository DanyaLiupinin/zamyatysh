import { useEffect, useState } from "react";

export const useGetOrders = () => {

    const [orders, setOrders] = useState([]);

    useEffect(() => {

        const storageOrders = localStorage.getItem("orders");

        if (storageOrders) {
            const ordersArr = JSON.parse(storageOrders);
            setOrders(ordersArr);
        }

    }, []);

    return {
        orders
    };
};