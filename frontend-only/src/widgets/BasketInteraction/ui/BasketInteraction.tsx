import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { TLocale } from "../../../types/components";

import { setOrderHandler } from "@handlers";

import { WelcomeNavigation } from "@features";

import './BasketInteraction.scss';

import content from '../../../locale/Basket.json';


export const BasketInteraction = ({ finalPrice, noLoggedInNotification }: 
    { finalPrice: number, noLoggedInNotification: any 
    }) => {

    
    const basketShort = useSelector((state: any) => state.items.basketItemsShort);

    const loggedIn = useSelector((state: any) => state.user.loggedIn);
    const locale: TLocale = useSelector((state: any) => state.items.locale);

    const createOrderHandler = () => {
        

        if (!loggedIn) {
            noLoggedInNotification();
        }


        //setOrderHandler(basketShort);
    }

    return (
        <div className='basket__column basket__column-right'>
            <div className='basket__notification'>
                {
                    loggedIn ?
                        <p className='basket__notification-text'>
                            bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
                            bla bla bla bla bla bla bla bla bla
                        </p>
                        :
                        <>
                            <p className='basket__notification-text'>
                                {content.registerFor[locale]}
                            </p>
                            <button className='basket__register-btn'>
                                <Link className='basket__register-btn-text' to={"/register"}>
                                    {content.register[locale]}
                                </Link>
                            </button>
                            <p className='basket__caption'>
                                {content.haveAccount[locale]}
                                <Link to={"/login"}> {content.login[locale]}</Link>
                            </p>
                        </>
                }
            </div>
            <div className='basket__price-container'>
                <p>{content.finalPrice[locale]} {finalPrice} {content.kwaks[locale]}</p>
                <button onClick={createOrderHandler} className='basket__submit-btn' type='button'>
                    {content.buy[locale]}
                </button>
            </div>
        </div>
    );
};