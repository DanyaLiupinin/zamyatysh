import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import './ItemMenu.scss';

import { TLocale } from '../../../types/components';
import frog from '../../../images/vkorzini.svg';
import content from '../../../locale/ItemMenu.json';
import { IItem } from '../../../types/types';

const ItemMenu = ({
    item,
    chosenSize,
    setChosenSize,
    addItemHandler,
    isBasketItem,
    basketItemCount
}: {
    item: IItem,
    chosenSize: string,
    setChosenSize: React.Dispatch<React.SetStateAction<string>>,
    isBasketItem: boolean,
    addItemHandler: () => void,
    basketItemCount: number;
}) => {

    const [isCaptionActive, setCaptionActive] = useState(false);

    const locale: TLocale = useSelector((state: any) => state.items.locale);

    const onSizeClick = (size: string) => {
        if (chosenSize.includes(size)) {
            setChosenSize('');
        } else {
            setChosenSize(size);
            setCaptionActive(false);
        }
    };

    const onAddItem = () => {
        if (chosenSize === '') {
            setCaptionActive(true);
        } else {
            addItemHandler();
        }
    };

    return (
        <div className='itemInformation'>
            <h2 className='itemInformation__title'>{item.title[locale]}</h2>
            <p className='itemInformation__price'>{item.price} kwaks</p>
            <div className='itemInformation__sizes'>
                {
                    item.sizes && item.sizes.map((size: string, index: number) => {
                        return (
                            <div
                                onClick={() => onSizeClick(size.toUpperCase())}
                                key={index}
                                className={`itemInformation__size ${chosenSize === size.toUpperCase() ? 'itemInformation__size_active' : ''}`}>
                                <p>{size.toUpperCase()}</p>
                            </div>
                        );
                    })
                }
            </div>
            <p className='itemInformation__size-guide'>{content.howToSize[locale]}</p>
            <div className='itemInformation__basket-container'>
                <img
                    src={frog}
                    className={`itemInformation__basket-image ${chosenSize !== '' ? 'itemInformation__basket-image_active' : ''}`}
                    alt='frog wants you to buy something'></img>
                <button
                    onClick={onAddItem}
                    disabled={isCaptionActive ? true : false}
                    className={`itemInformation__add-button`}
                    type='button'>
                    {
                        content.addToBasket[locale]
                    }
                </button>
                {isCaptionActive ?  
                    <p className='itemInformation__caption'>choose size please c:</p> : ''
                }
                {
                isBasketItem ?
                    <p className='itemInformation__caption'>you've already added {basketItemCount} c:</p> : ''
                }
            </div>
        </div>
    );
};

export default ItemMenu;