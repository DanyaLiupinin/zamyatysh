import "./Basket.scss";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";
import array from "../../images/historyArray.svg";

import { getBasketItem } from "../../utils/api";

import basketImage from "../../images/basket-image.svg";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Basket = () => {
    const loggedIn = useSelector((state: any) => state.user.loggedIn);
    const basketShort = useSelector((state: any) => state.items.basketItemsShort);

    const locale = useSelector((state: any) => state.items.locale);

    const [basketItems, setBasketItems] = useState<any>([]);

    let finalPrice = 0;
    /*
          const getFinalPrice = () => {
              if (basket && basket.length > 0) {
                  const regex = /\d+/g;
      
                  for (let i = 0; i < basket.length; i++) {
                      const itemPrice = Number(basket[i].price.match(regex)[0]);
                      finalPrice = finalPrice + itemPrice;
                  }
              }
          };
      
          getFinalPrice();
      */

    const navigate = useNavigate();

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
                                newItem.title = itemData.localizations[0].attributes.title;
                                newItem.material = itemData.localizations[0].attributes.material;
                                newItem.price = itemData.localizations[0].attributes.price;
                                break;
                        }
    
                        itemsNewArray.push(newItem);
                    } catch (error) {
                        console.error("Error fetching item:", error);
                    }
                }
    
                setBasketItems(itemsNewArray);
            };
    
            fetchItems();
        }
    }, [basketShort, locale]);
    
    

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
                <h2 className='basket__title'>Basket</h2>

                {!basketItems || basketItems.length === 0 ? (
                    <p className='basket__no-items'>
                        there is no items in your basket :c
                    </p>
                ) : (
                    <div className='basket__container'>
                        <div className='basket__column basket__column-left'>
                            <div className='basket__items'>
                                {basketItems &&
                                    basketItems.length > 0 &&
                                    basketItems.map((item: any, index: number) => {
                                        return (
                                            <div className='basket__item' key={index}>
                                                <img
                                                    src={item.image}
                                                    className='basket__item-image basket__item-info'
                                                    alt='..'
                                                ></img>
                                                <p className='basket__item-title basket__item-info'>
                                                    {item.title}
                                                </p>
                                                <p className='basket__item-size basket__item-info'>
                                                    Size: <br /> {item.size}
                                                </p>
                                                <p className='basket__item-price basket__item-info'>
                                                    Price: <br /> {item.price}
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
                                            register for having access to our discounts
                                        </p>
                                        <button className='basket__register-button'>
                                            register
                                        </button>
                                        <p className='basket__caption'>
                                            already have an account?
                                            <Link to={"/login"}> Login</Link>
                                        </p>
                                    </>
                                )}
                            </div>
                            <div className='basket__price-container'>
                                <p>final price is {finalPrice} kwaks</p>
                                <button className='basket__submit-button' type='button'>
                                    Buy
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
