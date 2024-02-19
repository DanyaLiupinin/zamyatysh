export const addItemHandler = ({param, chosenSize, item, setBasket, basketItems}: any) => {
    const newItem = {
        id: param.id,
        size: chosenSize,
        slug: item.slug,
        price: item.price,
    };

    if (!basketItems) {
        setBasket([newItem]);
    } else {
        setBasket([...basketItems, newItem]);
    }
};