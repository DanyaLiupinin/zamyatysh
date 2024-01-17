export const useGetOrders = () => {

    let orders = [];

    const storageOrders = localStorage.getItem("orders");

    if (storageOrders) {
        orders = JSON.parse(storageOrders);
    }

    return {
        orders
    };
};