export const setOrderHandler = (newOrderItems: any) => {

    let newOrder = {
        id: 0,
        items: newOrderItems
    };

    const prevOrders = localStorage.getItem("orders");

    if (prevOrders) {
        const prevOrdersArr = JSON.parse(prevOrders);
        newOrder.id = prevOrdersArr.length;
        const actualOrders = [...prevOrdersArr, newOrder];
        localStorage.setItem("orders", JSON.stringify(actualOrders));
    } else {
        localStorage.setItem("orders", JSON.stringify([newOrder]));
    }
};