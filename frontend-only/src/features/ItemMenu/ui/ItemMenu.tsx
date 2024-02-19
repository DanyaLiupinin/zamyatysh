import React, { FC, useState } from 'react';
import { useSelector } from 'react-redux';
import { TLanguage, IItem } from '@types';
import { ItemCaption } from '@components';

import content from '@locale/ItemMenu.json';

import { ItemSizes } from './ItemSizes';
import { AddItem } from './AddItem';

import { IItemMenuProps } from '../model/types/types';
import { selectLanguage } from '../model/selectors/selectors';
import { onAddItem } from '../lib/handlers/handlers';
import './ItemMenu.scss';

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
    const locale: TLanguage = useSelector(selectLanguage);

    const onSizeClick = (size: string) => {
        if (chosenSize.includes(size)) {
            setChosenSize('');
        } else {
            setChosenSize(size);
            setCaptionActive(false);
        }
    };

    return (
        <div className={`itemMenu ${className}`}>
            <h2 className='itemMenu__title'>{item.title[locale]}</h2>
            <p className='itemMenu__price'>{item.price} {content.kwaks[locale]}</p>
            <ItemSizes
                item={item}
                onSizeClick={onSizeClick}
                chosenSize={chosenSize}
            />
            <p className='itemMenu__size-guide'>{content.howToSize[locale]}</p>
            <AddItem
                chosenSize={chosenSize}
                onAddItem={() => onAddItem({chosenSize, setCaptionActive, addItemHandler})}
                isCaptionActive={isCaptionActive}
            />
            {isCaptionActive &&
                <ItemCaption>{content.chooseSize[locale]}</ItemCaption>
            }
            {
                isBasketItem &&
                <ItemCaption>{content.itemAdded[locale]} {basketItemCount} c:</ItemCaption>
            }
        </div>
    );
};
