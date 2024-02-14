export const setOrderHandler = (newOrderItems: any) => {

    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth() + 1;
    const currentDay = new Date().getDate();

    let newOrder = {
        id: 0,
        items: newOrderItems,
        date: `${currentDay}.${currentMonth}.${currentYear}`
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