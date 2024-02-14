import { FC } from "react";
import { useSelector } from "react-redux";
import { setOrderHandler } from "@handlers";
import { itemsActions, useActionCreators } from "@store";

import { MakeOrder } from "../../MakeOrder";
import { BasketNote } from "../../BasketNote";
import './BasketInteraction.scss';

type BasketInteractionProps = {
    finalPrice: number,
    noLoggedInNotification: any,
    isSuccessOrder: any
}

export const BasketInteraction: FC<BasketInteractionProps> = ({
    finalPrice,
    noLoggedInNotification,
    isSuccessOrder
}) => {

    const { setBasket } = useActionCreators(itemsActions);
    const basketShort = useSelector((state: any) => state.items.basketItemsShort);
    const loggedIn = useSelector((state: any) => state.user.loggedIn);

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