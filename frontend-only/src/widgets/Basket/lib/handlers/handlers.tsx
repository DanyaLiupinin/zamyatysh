export const completeOrderHandler = ({setBasket}: any) => {
    setBasket([]);
};

export const deleteItemHandler = (id: number, basketShort: any, setBasket: any) => {
    const newArray = [...basketShort];
    newArray.splice(id, 1);
    setBasket(newArray);
};