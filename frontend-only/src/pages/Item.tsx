import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import "./styles/Item/Item.scss";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import ImageCarousel from "../components/Item/ImageCarousel/ImageCarousel";
import BasketNotification from "../components/BasketNotification/BasketNotification";
import ItemInformation from "../components/Item/ItemInformation/ItemInformation";
import { TLocale } from "../types/components";
import { getItem } from "../utils/api";
import { itemsActions } from "../store/items/index";
import { useActionCreators } from "../store";

import { NavButton } from "../components/NavButton/NavButton";

import { items } from "../constants/constants";

import array from "../images/historyArray.svg";

import { IItem } from "../types/types";

import content from "../locale/ItemCard.json";

const ItemCard: React.FC<any> = () => {
    const [item, setItem] = useState<any>();
    const [chosenSize, setChosenSize] = useState<string>("");
    const [isBasketItem, setBasketItem] = useState(false);
    const [basketItemCount, setBasketItemCount] = useState(0);

    const locale: TLocale = useSelector((state: any) => state.items.locale);
    const basketItems = useSelector((state: any) => state.items.basketItemsShort);

    const { setBasket } = useActionCreators(itemsActions);

    const navigate = useNavigate();

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

    useEffect(() => {
        if (basketItems && item) {
            let itemCounter = 0;
            for (let i = 0; i < basketItems.length; i++) {
                if (basketItems[i].slug === item.slug) {
                    setBasketItem(true);
                    itemCounter = ++ itemCounter;
                }
            }

            setBasketItemCount(itemCounter);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [basketItems, item]);

    useEffect(() => {
        const actualItem = items.find((i: IItem) => {
            return i.id === Number(param.id);
        })

        setItem(actualItem);
    }, []);
    
    return (
        <>
            <Header /> 
            <section className='itemCard'>
                <NavButton />
                {item ? (
                    <>
                        <div className='itemCard__card-container'>
                            <div className='itemCard__sticky-notification-container'>
                                <BasketNotification />
                            </div>
                            <ImageCarousel item={item} />
                            <ItemInformation
                                chosenSize={chosenSize}
                                setChosenSize={setChosenSize}
                                item={item}
                                addItemHandler={addItemHandler}
                                isBasketItem={isBasketItem}
                                basketItemCount={basketItemCount}
                            />
                        </div>
                        <div id='description' className='itemCard__item-description'>
                            <h3>{content.description[locale]}:</h3>
                            <p>{item.description[locale]}</p>
                            <h3 className='itemCard__item-description-inline'>
                                {content.material[locale]}:{" "}
                            </h3>
                            <p>{item.material[locale]}</p>
                            <h3 className='itemCard__item-description-inline'>
                                {content.style[locale]}:
                            </h3>
                            <p>{item.style[locale]}</p>
                        </div>
                    </>
                ) : (
                    <p>oooops</p>
                )}
            </section>
            <Footer />
        </>
    );
};

export default ItemCard;
