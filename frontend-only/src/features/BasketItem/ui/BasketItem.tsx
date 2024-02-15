
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import './BasketItem.scss';
import content from '@locale/Basket.json';

import deleteImage from '@images/deleteicon.svg';
import { items } from "@constants";

import { IItem, TLanguage } from "@types";

export const BasketItem = ({ 
    shortItem, 
    deleteItemHandler, 
    id 
}: { shortItem: any, deleteItemHandler: (id: number) => void, id: number }) => {

    const [item, setItem] = useState<IItem | ''>('');

    const locale: TLanguage = useSelector((state: any) => state.items.locale);

    useEffect(() => {
        const actualItem = items.find(i => Number(i.id) === Number(shortItem.id));
        if (actualItem)
            setItem(actualItem);
    }, []);

    console.log(item)

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