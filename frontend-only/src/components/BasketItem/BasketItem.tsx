
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import './BasketItem.scss';

import { IItem } from "../../types/types";
import deleteImage from '../../images/deleteicon.svg';
import { items } from "../../constants/constants";
import { TLocale } from "../../types/components";
import { IShortItem } from "../../types/types";
import content from '../../locale/BasketItem.json';

export const BasketItem = ({ shortItem, deleteItemHandler, id }: { shortItem: IShortItem, deleteItemHandler: (id: number) => void, id: number }) => {

    const [item, setItem] = useState<IItem | ''>('');

    const locale: TLocale = useSelector((state: any) => state.items.locale);

    useEffect(() => {
        const actualItem = items.find(i => Number(i.id) === Number(shortItem.id));
        if (actualItem)
            setItem(actualItem);
    }, []);

    return (
        <>
            {
                item &&
                <div className='basketItem'>
                    <button 
                        onClick={() => deleteItemHandler(id)} type="button" className='basketItem__delete-btn-container'>
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
}