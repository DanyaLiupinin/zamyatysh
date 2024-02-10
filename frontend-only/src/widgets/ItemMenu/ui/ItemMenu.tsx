import React, { FC, useState } from 'react';
import { useSelector } from 'react-redux';
import { TLanguage, IItem } from '@types';
import { ItemSizes, AddItem } from '@features';
import { ItemCaption } from '@components';

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
            <p className='itemMenu__size-guide'>{content.howToSize[locale]}</p>
            <AddItem
                chosenSize={chosenSize}
                onAddItem={onAddItem}
                isCaptionActive={isCaptionActive}
            />
            {isCaptionActive &&
                <ItemCaption>choose size please c:</ItemCaption>
            }
            {
                isBasketItem &&
                <ItemCaption>you've already added {basketItemCount} c:</ItemCaption>
            }
        </div>
    );
};
