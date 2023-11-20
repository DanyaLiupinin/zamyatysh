import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import "./styles/ItemCard/ItemCard.scss";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import ImageCarousel from "../components/ImageCarousel/ImageCarousel";
import BasketNotification from "../components/BasketNotification/BasketNotification";
import ItemInformation from "../components/ItemInformation/ItemInformation";
import { TLocale } from "../types/components";
import { getItem } from "../utils/api";
import { itemsActions } from "../store/items/index";
import { useActionCreators } from "../store";

import array from "../images/historyArray.svg";

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

    const slug = useParams();

    const addItemHandler = () => {
        const newItem = {
            id: slug.slug,
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
        if (locale && slug.slug) {
            getItem({
                id: slug.slug,
                locale: locale,
            }).then((res) => {
                setItem(res.data.attributes);
            });
        }
    }, [locale, slug]);

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
    
    return (
        <>
            <Header /> 
            <section className='itemCard'>
                <button className='itemCard__navigation' onClick={() => navigate(-1)}>
                    <img
                        className='itemCard__navigation-image'
                        src={array}
                        alt='back'
                    ></img>
                    {content.goBack[locale]}
                </button>
                {item !== undefined ? (
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
                            <p>{item.description}</p>
                            <h3 className='itemCard__item-description-inline'>
                                {content.material[locale]}:{" "}
                            </h3>
                            <p>{item.material}</p>
                            <h3 className='itemCard__item-description-inline'>
                                {content.style[locale]}:
                            </h3>
                            <p>{item.style}</p>
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
