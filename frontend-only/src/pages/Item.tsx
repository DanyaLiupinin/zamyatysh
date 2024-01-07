import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import "./styles/Item/Item.scss";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import ImageCarousel from "../components/Item/ImageCarousel/ImageCarousel";
import BasketNotification from "../components/BasketNotification/BasketNotification";
import ItemMenu from "../components/Item/ItemMenu/ItemMenu";
import { itemsActions } from "../store/items/index";
import { useActionCreators } from "../store";
import { ItemInformation } from "../components/Item/ItemInformation/ItemInformation";
import { NavButton } from "../components/NavButton/NavButton";
import { items } from "../constants/constants";
import { IItem } from "../types/types";

const ItemCard: React.FC<any> = () => {

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
                    console.log('da')
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
            <Header />
            <section className='itemCard'>
                <NavButton />
                {
                    item ?
                        <>
                            <div className='itemCard__card-container'>
                                <div className='itemCard__sticky-notification-container'>
                                    <BasketNotification />
                                </div>
                                <ImageCarousel item={item} />
                                <ItemMenu
                                    chosenSize={chosenSize}
                                    setChosenSize={setChosenSize}
                                    item={item}
                                    addItemHandler={addItemHandler}
                                    isBasketItem={isBasketItem}
                                    basketItemCount={basketItemCount}
                                />
                            </div>
                            <ItemInformation
                                item={item}
                            />
                        </>
                        :
                        <p className='itemCard__empty'>oooops, we couldnt find this item</p>
                }
            </section>
            <Footer />
        </>
    );
};

export default ItemCard;
