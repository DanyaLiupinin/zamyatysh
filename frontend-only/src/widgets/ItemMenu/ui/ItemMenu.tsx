import React, { FC, useState } from 'react';
import { useSelector } from 'react-redux';
import frog from '@images/vkorzini.svg';
import { TLanguage, IItem } from '@types';
import { SizeButton } from '@components';
import { ItemSizes } from '@features';

import content from '../../../locale/ItemMenu.json';

import './ItemMenu.scss';

type IItemMenuProps = {
    item: IItem,
    chosenSize: string,
    setChosenSize: React.Dispatch<React.SetStateAction<string>>,
    isBasketItem: boolean,
    addItemHandler: () => void,
    basketItemCount: number;
    className?: string;
}

export const ItemMenu: FC<IItemMenuProps> = ({
    item,
    chosenSize,
    setChosenSize,
    addItemHandler,
    isBasketItem,
    basketItemCount,
    className = '',
}) => {

    const [isCaptionActive, setCaptionActive] = useState(false);
    const locale: TLanguage = useSelector((state: any) => state.items.locale);

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
        <div className={`itemMenu ${className}`}>
            <h2 className='itemMenu__title'>{item.title[locale]}</h2>
            <p className='itemMenu__price'>{item.price} kwaks</p>
            <ItemSizes
                item={item}
                onSizeClick={onSizeClick}
                chosenSize={chosenSize}
            />
            {/* shared или оставить так */}
            <p className='itemMenu__size-guide'>{content.howToSize[locale]}</p>
            <div className='itemMenu__basket-container'>
                <img
                    src={frog}
                    className={`itemMenu__basket-image ${chosenSize !== '' ? 'itemMenu__basket-image_active' : ''}`}
                    alt='frog wants you to buy something'></img>
                <button
                    onClick={onAddItem}
                    disabled={isCaptionActive ? true : false}
                    className={`itemMenu__add-button`}
                    type='button'>
                    {
                        content.addToBasket[locale]
                    }
                </button>
                {/* ошибки - shared */}
                {isCaptionActive ?
                    <p className='itemMenu__caption'>choose size please c:</p> : ''
                }
                {
                    isBasketItem ?
                        <p className='itemMenu__caption'>you've already added {basketItemCount} c:</p> : ''
                }
            </div>
        </div>
    );
};
