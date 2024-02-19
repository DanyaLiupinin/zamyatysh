import { useState } from "react";
import { useSelector } from "react-redux";
import { NoLoggedNotification, SuccessOrder } from '@components';
import { useActionCreators, itemsActions } from '@store';
import { TLanguage } from '@types';
import content from '@locale/Basket.json';
import { selectLanguage } from "widgets/Header/model/selectors";

import { selectBasketItems } from "../model/selectors/selectors";
import { completeOrderHandler, deleteItemHandler } from "../lib/handlers/handlers";
import { useSetFinalPrice } from "../lib/hooks/useSetFinalPrice";

import { BasketInteraction } from './BasketInteraction';
import { BasketList } from './BasketList';
import './MainBasketSection.scss';

export const MainBasketSection = () => {

    const basketShort = useSelector(selectBasketItems);
    const locale: TLanguage = useSelector(selectLanguage);
    const [finalPrice, setFinalPrice] = useState(0);
    const [noLoggedInNotification, setNoLoggedInNotification] = useState(false);
    const [isSuccessOrder, setSuccessOrder] = useState(false);
    const { setBasket } = useActionCreators(itemsActions);

    const onSkipNotification = () => {
        setNoLoggedInNotification(false);
        setSuccessOrder(true);
        completeOrderHandler({ setBasket });
    };

    useSetFinalPrice({ basketShort, setFinalPrice });

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
                        deleteItemHandler={(id: number) => deleteItemHandler(id, basketShort, setBasket)}
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
