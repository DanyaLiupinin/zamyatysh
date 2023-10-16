import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import './ItemCard.scss';

import { useSelector } from 'react-redux';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import ImageCarousel from '../ImageCarousel/ImageCarousel';
import BasketNotification from '../BasketNotification/BasketNotification';
// eslint-disable-next-line import/order
import ItemInformation from '../ItemInformation/ItemInformation';

import content from './locale.json';
import { TLocale } from '../../types/components';

//import items from '../../constants/items';


import array from '../../images/historyArray.svg';
import { getItem, getUserItem } from '../../utils/api';


import { itemsActions } from "../../store/items/index";
import { useActionCreators } from "../../store";

const ItemCard: React.FC<any> = () => {

    const [item, setItem] = useState<any>();
    const [chosenSize, setChosenSize] = useState<string>('');
    //const [allBasketItems, setAllBasketItems] = useState<any>(null);
    const [isBasketItem, setBasketItem] = useState(false);
    const [basketItemCount, setBasketItemCount] = useState(0);

    const loggedIn = useSelector((state: any) => state.user.loggedIn);
    const locale: TLocale = useSelector((state: any) => state.items.locale);
    const basketItems = useSelector((state: any) => state.items.basketItemsShort);

    const { setBasket } = useActionCreators(itemsActions);

    const navigate = useNavigate();

    const slug = useParams();

    const addItemHandler = () => {

        const newItem = {
            id: slug.slug,
            size: chosenSize,
            slug: item.slug,
            price: item.price
        };

        if (!basketItems) {
            console.log('korziny net')
            setBasket([newItem]);
        } else {
            console.log('korziny est')
            setBasket([...basketItems, newItem]);
        }
    };

    //// убрать это // функционал изменен
    useEffect(() => {

        if (locale && slug.slug) {

            if (!loggedIn) {
                getItem({
                    id: slug.slug,
                    locale: locale
                })
                    .then((res) => {
                        setItem(res.data.attributes)
                    });
            } else {
                getUserItem({
                    id: slug.slug,
                    locale: locale,
                    jwt: localStorage.getItem('jwt')
                })
                    .then((res) => {
                        setItem(res.data.attributes);
                        //isThisUserItem(res.data.attributes.users.data) ? 
                        //setBasketItem(true) : 
                        //setBasketItem(false);
                    });
            }
        }
    }, [locale, slug]);

    useEffect(() => {
        if (basketItems && item) {
            for (let i = 0; i < basketItems.length; i++) {
                if (basketItems[i].slug === item.slug) {
                    setBasketItem(true);
                    setBasketItemCount(basketItemCount + 1)
                }
            }
        }
    }, [basketItems]);

    return (
        <>
            <Header />
            <section className='itemCard'>
                <button className='itemCard__navigation' onClick={() => navigate(-1)}>
                    <img className='itemCard__navigation-image' src={array} alt='back'></img>
                    {content.goBack[locale]}
                </button>
                {item !== undefined ?
                    <>
                        <div className='itemCard__card-container'>
                            <div className='itemCard__sticky-notification-container'>
                                <BasketNotification />
                            </div>
                            <ImageCarousel
                                item={item}
                            />

                            <ItemInformation
                                // isBasketItem={isBasketItem}
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
                            <p>{item.description}</p>
                            <h3 className='itemCard__item-description-inline'>{content.material[locale]}: </h3>
                            <p>{item.material}</p>
                            <h3 className='itemCard__item-description-inline'>{content.style[locale]}:</h3>
                            <p>{item.style}</p>
                        </div>
                    </>
                    :
                    <p>oooops</p>
                }
            </section>
            <Footer />
        </>
    );
};

export default ItemCard;