import './Basket.scss';
import React, { useEffect } from "react";

import { Link } from "react-router-dom";

import { useSelector } from 'react-redux';
import array from '../../images/historyArray.svg';

import { useNavigate } from 'react-router-dom';

import basketImage from '../../images/basket-image.svg';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';


import { itemsActions } from "../../store/items/index";
import { useActionCreators } from "../../store";


const Basket = () => {

    const loggedIn = useSelector((state: any) => state.user.loggedIn);
    const basket = useSelector((state: any) => state.items.basket);

    let finalPrice = 0;

    const getFinalPrice = () => {
        if (basket) {
            const regex = /\d+/g;

            for (let i = 0; i < basket.length; i++) {
                const itemPrice = Number(basket[i].price.match(regex)[0]);
                finalPrice = finalPrice + itemPrice;
            }
        }
    };

    getFinalPrice();


    const navigate = useNavigate();


    return (
        <>
            <Header />
            <section className='basket'>
                <button className='itemCard__navigation' onClick={() => navigate(-1)}>
                    <img className='itemCard__navigation-image' src={array} alt='back'></img>
                    go back
                </button>
                <h2 className='basket__title'>Basket</h2>

                {
                    !basket || basket.length === 0 ?
                        <p className='basket__no-items'>there is no items in your basket :c</p> :
                        <div className='basket__container'>
                            <div className='basket__column basket__column-left'>
                                <div className='basket__items'>

                                    {
                                        basket && basket.length > 0 &&
                                        basket.map((item: any) => {
                                            return (
                                                <div className='basket__item' key={item.id}>
                                                    <img src={item.image[0].url} className='basket__item-image basket__item-info' alt='..'></img>
                                                    <p className='basket__item-title basket__item-info'>{item.title}</p>
                                                    <p className='basket__item-size basket__item-info'>Size: <br /> {item.sizes[0].size}</p>
                                                    <p className='basket__item-price basket__item-info'>Price: <br /> {item.price}</p>
                                                </div>
                                            );
                                        })
                                    }


                                </div>
                                <img className='basket__image' alt='...' src={basketImage}></img>
                            </div>

                            <div className='basket__column basket__column-right'>
                                <div className='basket__notification'>
                                    {
                                        loggedIn ?
                                            <p className='basket__notification-text'>bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla</p> :
                                            <>
                                                <p className='basket__notification-text'>register for having access to our discounts</p>
                                                <button className='basket__register-button'>register</button>
                                                <p className='basket__caption'>already have an account?
                                                    <Link to={'/login'}> Login</Link>
                                                </p>
                                            </>
                                    }
                                </div>
                                <div className='basket__price-container'>
                                    <p>final price is {finalPrice} kwaks</p>
                                    <button className='basket__submit-button' type='button'>Buy</button>
                                </div>
                            </div>
                        </div>
                }
            </section>
            <Footer />
        </>
    )
}

export default Basket;