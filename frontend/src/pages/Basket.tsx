import './styles/Basket/Basket.scss';
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";
import array from "../images/historyArray.svg";

import deleteImage from '../images/deleteicon.svg';

import { getBasketItem } from "../utils/api";

import basketImage from "../images/basket-image.svg";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Spinner from "../components/Spinner/Spinner";

import { useActionCreators } from "../store";
import { itemsActions } from "../store/items";

import { TLocale } from '../types/components';

import content from '../locale/Basket.json';

const Basket = () => {
    const loggedIn = useSelector((state: any) => state.user.loggedIn);
    const basketShort = useSelector((state: any) => state.items.basketItemsShort);

    const locale: TLocale = useSelector((state: any) => state.items.locale);

    const [basketItems, setBasketItems] = useState<any>([]);
    const [finalPrice, setFinalPrice] = useState(0);
    const [isSpinnerActive, setSpinnerActive] = useState<boolean>(true);
    
    const { setBasket } = useActionCreators(itemsActions);

    const getFinalPrice = () => {
        if (basketItems && basketItems.length > 0) {
            const regex = /\d+/g;
            let total = 0;
            for (let i = 0; i < basketItems.length; i++) {
                const itemPrice = Number(basketItems[i].price.match(regex)[0]);
                total = total + itemPrice;
            }
            setFinalPrice(total);
        }
    };

    const deleteItemHandler = ({id, size}: any) => {
        
        const newArray = [];
        
        let itemDeleted = false;

        for (let i = 0; i < basketShort.length; i++) {
            if (basketShort[i].id === id && basketShort[i].size === size) {
                if (!itemDeleted) {
                    itemDeleted = true;
                    continue
                } else {
                    newArray.push(basketShort[i])
                }
            } else {
                newArray.push(basketShort[i])
            }
        }

        setBasket(newArray);
        
    };

 
    const navigate = useNavigate();

    // v zakaze budet jranitsia tolko 
    // - id
    // - size


    useEffect(() => {

        if (basketShort && basketShort.length > 0) {
            const fetchItems = async () => {

                const itemsNewArray = [];

                for (let i = 0; i < basketShort.length; i++) {
                    const basketItem = basketShort[i];

                    try {
                        const response = await getBasketItem({ id: basketItem.id, locale: locale });
                        const itemData = response.data.attributes;

                        let newItem = {
                            title: "",
                            material: "",
                            price: "",
                            size: basketItem.size,
                            image: itemData.image.data[0].attributes.url,
                            id: basketItem.id,
                        };

                        switch (locale) {
                            case "en":
                                newItem.title = itemData.title;
                                newItem.material = itemData.material;
                                newItem.price = itemData.price;
                                break;

                            case "ru":
                                newItem.title = itemData.localizations.data[0].attributes.title;
                                newItem.material = itemData.localizations.data[0].attributes.material;
                                newItem.price = itemData.localizations.data[0].attributes.price;
                                break;
                        }

                        itemsNewArray.push(newItem);
                    } catch (error) {
                        return error;
                    }
                }
                setBasketItems(itemsNewArray);
            };
            fetchItems();
        }
    }, [basketShort, locale]);


    useEffect(() => {
        if (basketShort &&
            basketItems &&
            basketShort.length === basketItems.length) {
            setTimeout(() => {
                getFinalPrice();
            }, 2200);

            setSpinnerActive(false);
        }
    }, [basketItems]);

    return (
        <>
            <Header />
            <section className='basket'>
                <button className='itemCard__navigation' onClick={() => navigate(-1)}>
                    <img
                        className='itemCard__navigation-image'
                        src={array}
                        alt='back'
                    ></img>
                    go back
                </button>
                <h2 className='basket__title'>{content.basket[locale]}</h2>

                {!basketItems || basketItems.length === 0 ? (
                    <>

                        <p className='basket__no-items'>
                        {content.noItems[locale]}
                        </p>
                        <Spinner isActive={isSpinnerActive} />
                    </>
                ) : (
                    <div className='basket__container'>
                        <div className='basket__column basket__column-left'>
                            <div className='basket__items'>
                                {basketItems &&
                                    basketItems.length > 0 &&
                                    basketItems.map((item: any, index: number) => {
                                        return (
                                            <div className='basket__item' key={index}>
                                                <button onClick={() => deleteItemHandler(item)} type="button" className='basket__delete-button-container'>
                                                    <img className='basket__delete-button' src={deleteImage} alt='delete item'>
                                                    </img>
                                                </button>
                                                <img
                                                    src={item.image}
                                                    className='basket__item-image basket__item-info'
                                                    alt='..'
                                                ></img>
                                                <p className='basket__item-title basket__item-info'>
                                                    {item.title}
                                                </p>
                                                <p className='basket__item-size basket__item-info'>
                                                {content.size[locale]}: <br /> {item.size}
                                                </p>
                                                <p className='basket__item-price basket__item-info'>
                                                {content.price[locale]}: <br /> {item.price}
                                                </p>
                                            </div>
                                        );
                                    })}
                            </div>
                            <img className='basket__image' alt='...' src={basketImage}></img>
                        </div>

                        <div className='basket__column basket__column-right'>
                            <div className='basket__notification'>
                                {loggedIn ? (
                                    <p className='basket__notification-text'>
                                        bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
                                        bla bla bla bla bla bla bla bla bla
                                    </p>
                                ) : (
                                    <>
                                        <p className='basket__notification-text'>
                                        {content.registerFor[locale]}
                                        </p>
                                        <button className='basket__register-button'>
                                        {content.register[locale]}
                                        </button>
                                        <p className='basket__caption'>
                                        {content.haveAccount[locale]}
                                            <Link to={"/login"}> {content.login[locale]}</Link>
                                        </p>
                                    </>
                                )}
                            </div>
                            <div className='basket__price-container'>
                                <p>{content.finalPrice[locale]} {finalPrice} {content.kwaks[locale]}</p>
                                <button className='basket__submit-button' type='button'>
                                {content.buy[locale]}
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </section>
            <Footer />
        </>
    );
};

export default Basket;
