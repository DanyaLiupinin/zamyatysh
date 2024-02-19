import { useSelector } from "react-redux";
import { BasketItem } from "@features";
import basketImage from "@images/basket-image.svg";

import {selectBasketItems} from '../../../model/selectors/selectors';
import './BasketList.scss';
import { FC } from "react";
import { IBasketListProps } from "../model/types/types";
import { IBasketShort } from "@types";

export const BasketList: FC<IBasketListProps> = ({deleteItemHandler}) => {
    const basketShort = useSelector(selectBasketItems);
    return (
        <div className='basketList'>
            {
                basketShort && basketShort?.length > 0 &&
                basketShort.map((item: IBasketShort, index: number) => {
                    return (
                        <BasketItem
                            id={index}
                            key={index}
                            shortItem={item}
                            deleteItemHandler={deleteItemHandler}
                        />
                    );
                })}
            <img className='basketList__image' alt='...' src={basketImage}></img>
        </div>
    );
};