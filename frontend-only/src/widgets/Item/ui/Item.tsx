import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { ItemMenu } from "@widgets";
import { ImageCarousel } from "@components";
import { BasketNotification, ItemInformation, BasketNotificationContainer} from "@features";
import { itemsActions, useActionCreators } from "@store";
import { items } from "@constants";
import { IItem } from "@types";

import './Item.scss';

export const Item = () => {
    const [item, setItem] = useState<any>();
    const [chosenSize, setChosenSize] = useState<string>('');
    const [isBasketItem, setBasketItem] = useState(false);
    const [basketItemCount, setBasketItemCount] = useState(0);

    const basketItems = useSelector((state: any) => state.items.basketItemsShort);

    const { setBasket } = useActionCreators(itemsActions);

    const param = useParams();

    const addItemHandler = () => {
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

    // add basket counter to basket items
    useEffect(() => {
        const basketItemsHandler = () => {
            let itemCounter = 0;
            for (let i = 0; i < basketItems.length; i++) {
                if (Number(basketItems[i].id) === item.id) {
                    setBasketItem(true);
                    itemCounter = ++itemCounter;
                }
            }
            setBasketItemCount(itemCounter);
        };
        if (basketItems && item) {
            basketItemsHandler();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [basketItems, item]);

    useEffect(() => {
        const getActualItem = () => {
            const actualItem = items.find((i: IItem) => {
                return i.id === Number(param.id);
            });

            if (actualItem)
                setItem(actualItem);
        };
        getActualItem();
    }, []);

    return (
        <>

            {
                !item &&
                <p className='itemCard__empty'>oooops, we couldnt find this item</p>
            }

            {
                item &&
                <>
                    <div className='itemCard__card-container'>
                        <BasketNotificationContainer>
                            <BasketNotification />
                        </BasketNotificationContainer>

                        <ImageCarousel item={item} />
                        <ItemMenu
                            className='iMenu'
                            chosenSize={chosenSize}
                            setChosenSize={setChosenSize}
                            item={item}
                            addItemHandler={addItemHandler}
                            isBasketItem={isBasketItem}
                            basketItemCount={basketItemCount}
                        />
                        <ItemInformation
                            className='IInfo'
                            item={item}
                        />
                    </div>
                </>
            }
        </>
    );
};