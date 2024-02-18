import { FC } from "react";
import { useSelector } from "react-redux";
import { setOrderHandler } from "@handlers";
import { itemsActions, useActionCreators } from "@store";

import { MakeOrder } from "../../MakeOrder";
import { BasketNote } from "../../BasketNote";
import { BasketInteractionProps } from '../../../model/types/types';
import { selectBasketItems, selectLoggedIn } from '../../../model/selectors/selectors';
import './BasketInteraction.scss';

export const BasketInteraction: FC<BasketInteractionProps> = ({
    finalPrice,
    noLoggedInNotification,
    isSuccessOrder
}) => {

    const { setBasket } = useActionCreators(itemsActions);
    const basketShort = useSelector(selectBasketItems);
    const loggedIn = useSelector(selectLoggedIn);

    const makeOrderHandler = () => {
        if (!loggedIn) {
            noLoggedInNotification();
        } else {
            setOrderHandler(basketShort);
            setBasket([]);
            isSuccessOrder();
        }
    };

    return (
        <div className='basketInteraction'>
            <BasketNote />
            <MakeOrder
                makeOrderHandler={makeOrderHandler}
                finalPrice={finalPrice}
            />
        </div>
    );
};