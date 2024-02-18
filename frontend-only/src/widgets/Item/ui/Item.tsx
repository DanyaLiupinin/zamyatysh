import { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { ImageCarousel } from "@components";
import {
    BasketNotification,
    ItemInformation,
    BasketNotificationContainer,
    ItemMenu
} from "@features";
import { itemsActions, useActionCreators } from "@store";

import { useGetActualItem, useGetBasketCounter } from "../lib/effects";
import { selectBasketItems } from '../model/selectors';
import './Item.scss';

export const Item = () => {

    const [chosenSize, setChosenSize] = useState<string>('');
    const [isBasketItem, setBasketItem] = useState(false);
    const [basketItemCount, setBasketItemCount] = useState(0);

    const basketItems = useSelector(selectBasketItems);
    const { setBasket } = useActionCreators(itemsActions);
    const param = useParams();

    const { item } = useGetActualItem();

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
    useGetBasketCounter({ basketItems, item, setBasketItem, setBasketItemCount });

    return (
        <>
            {
                !item &&
                <p className='itemCard__empty'>oooops, we couldnt find this item</p>
            }
            {
                item &&
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
                        className='iInfo'
                        item={item}
                    />
                </div>
            }
        </>
    );
};