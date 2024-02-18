import { items } from "@constants";
import { IItem } from "@types";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const useGetBasketCounter = ({
    basketItems,
    item,
    setBasketItem,
    setBasketItemCount,
}: any) => {
    // add basket counter to basket items
    useEffect(() => {
        const basketItemsHandler = () => {
            if (basketItems && item) {
                let itemCounter = 0;
                for (let i = 0; i < basketItems.length; i++) {
                    if (Number(basketItems[i].id) === item.id) {
                        setBasketItem(true);
                        itemCounter = ++itemCounter;
                    }
                }
                setBasketItemCount(itemCounter);
            }
        };
        basketItemsHandler();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [basketItems, item]);
};

export const useGetActualItem = () => {
    const [item, setItem] = useState<any>(null);
    const param = useParams();

    useEffect(() => {
        const getActualItem = () => {
            const actualItem = items.find((i: IItem) => {
                return i.id === Number(param.id);
            });

            if (actualItem) setItem(actualItem);
        };
        getActualItem();
    }, []);

    return {
        item,
    };
};
