import './styles/Basket/Basket.scss';
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
    BasketList,
    BasketInteraction,
    Header,
    Footer
} from '@widgets';
import { NoLoggedNotification, SuccessOrder } from '@components';

import { useActionCreators } from "../store";
import { itemsActions } from "../store/items";
import { TLocale } from '../types/components';
import content from '../locale/Basket.json';

import { NavButton } from '@features';

const Basket = () => {

    const basketShort = useSelector((state: any) => state.items.basketItemsShort);
    const locale: TLocale = useSelector((state: any) => state.items.locale);

    const [finalPrice, setFinalPrice] = useState(0);
    const [noLoggedInNotification, setNoLoggedInNotification] = useState(false);
    const [isSuccessOrder, setSuccessOrder] = useState(false);
    ////


    const { setBasket } = useActionCreators(itemsActions);

    const getFinalPrice = () => {
        if (basketShort && basketShort.length > 0) {
            const regex = /\d+/g;
            let total = 0;
            for (let i = 0; i < basketShort.length; i++) {
                const itemPrice = Number(basketShort[i].price.match(regex)[0]);
                total = total + itemPrice;
            }
            setFinalPrice(total);
        }
    };

    const deleteItemHandler = (id: number) => {
        const newArray = [...basketShort];
        newArray.splice(id, 1);
        setBasket(newArray);
    };

    const completeOrderHandler = () => {
        
    }

    const onSkipNotification = () => {
        setNoLoggedInNotification(false);
        setSuccessOrder(true);
        completeOrderHandler();
    }

    useEffect(() => {
        getFinalPrice();
    }, []);

    return (
        <>
            {/*<Notification />*/}
            <Header />
            <section className='basket'>
                <NavButton />
                <h2 className='basket__title'>{content.basket[locale]}</h2>

                {
                    noLoggedInNotification &&
                    <NoLoggedNotification
                        onClose={() => setNoLoggedInNotification(false)}
                        onSkip={onSkipNotification}
                    />
                }

                {
                    isSuccessOrder &&
                    <SuccessOrder
                        onClose={() => setSuccessOrder(false)}
                    />
                }


                {basketShort?.length > 0 ?
                    <div className='basket__container'>
                        <BasketList
                            deleteItemHandler={deleteItemHandler}
                        />
                        <BasketInteraction
                            finalPrice={finalPrice}
                            noLoggedInNotification={() => setNoLoggedInNotification(true)}
                        />
                    </div>
                    :
                    <p className='basket__no-items'>
                        {content.noItems[locale]}
                    </p>
                }

            </section>
            <Footer />
        </>
    );
};

export default Basket;
