
import { FC, useState } from "react";
import { useSelector } from "react-redux";
import content from '@locale/Basket.json';
import deleteImage from '@images/deleteicon.svg';
import { IItem, TLanguage } from "@types";

import { IBasketItemProps } from "../model/types/types";
import { selectLanguage } from '../model/selectors/selectors';
import { useSetActualItem } from "../lib/hooks/useSetActualItem";
import './BasketItem.scss';

export const BasketItem: FC<IBasketItemProps> = ({
    shortItem,
    deleteItemHandler,
    id
}) => {

    const [item, setItem] = useState<IItem | ''>('');
    const locale: TLanguage = useSelector(selectLanguage);
    useSetActualItem({ shortItem, setItem });

    return (
        <>
            {
                item &&
                <div className='basketItem'>
                    <button
                        onClick={() => deleteItemHandler(id)} type='button' className='basketItem__delete-btn-container'>
                        <img className='basketItem__delete-btn' src={deleteImage} alt='delete item'>
                        </img>
                    </button>
                    <img
                        src={item.images[0]}
                        className='basketItem__image basketItem__info'
                        alt='..'
                    ></img>
                    <p className='basketItem__title basketItem__info'>
                        {item.title[locale]}
                    </p>
                    <p className='basketItem__size basketItem__info'>
                        {content.size[locale]}: <br /> {shortItem.size}
                    </p>
                    <p className='basketItem__price basketItem__info'>
                        {content.price[locale]}: <br /> {item.price}
                    </p>
                </div>
            }
        </>
    );
};