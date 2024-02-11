import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NoLoggedNotification, SuccessOrder } from '@components';
import { useActionCreators, itemsActions } from '@store';
import { TLanguage } from '@types';

import content from '../../../locale/Basket.json';

import { BasketList } from './BasketList';
import { BasketInteraction } from './BasketInteraction';

import './MainBasketSection.scss';

export const MainBasketSection = () => {

    const basketShort = useSelector((state: any) => state.items.basketItemsShort);
    const locale: TLanguage = useSelector((state: any) => state.items.locale);
    const [finalPrice, setFinalPrice] = useState(0);
    const [noLoggedInNotification, setNoLoggedInNotification] = useState(false);
    const [isSuccessOrder, setSuccessOrder] = useState(false);
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
        setBasket([]);
    };

    const onSkipNotification = () => {
        setNoLoggedInNotification(false);
        setSuccessOrder(true);
        completeOrderHandler();
    };

    useEffect(() => {
        getFinalPrice();
    }, [basketShort]);

    return (
        <>
            <h2 className='basketTitle'>{content.basket[locale]}</h2>
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
            {
                (!basketShort || basketShort?.length <= 0) &&
                <p className='basket__no-items'>
                    {content.noItems[locale]}
                </p>
            }
            {
                basketShort && basketShort?.length > 0 &&
                <div className='mainBasketSection'>
                    <BasketList
                        deleteItemHandler={deleteItemHandler}
                    />
                    <BasketInteraction
                        finalPrice={finalPrice}
                        noLoggedInNotification={() => setNoLoggedInNotification(true)}
                        isSuccessOrder={() => setSuccessOrder(true)}
                    />
                </div>
            }
        </>
    );
};
