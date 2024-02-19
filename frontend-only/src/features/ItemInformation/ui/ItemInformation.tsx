import { FC } from 'react';
import { useSelector } from 'react-redux';
import { TLanguage, IItem } from '@types';

import content from '@locale/ItemInformation.json';
import './ItemInformation.scss';
import { ItemInformationProps } from '../model/types/types';
import { selectBasketItems } from '../model/selectors/selectors';

export const ItemInformation: FC<ItemInformationProps> = ({ item, className }) => {

    const locale: TLanguage = useSelector(selectBasketItems);

    return (
        <div id='description' className={`itemCard__item-description ${className}`}>
            <h3>{content.description[locale]}:</h3>
            <p>{item.description[locale]}</p>
            <h3>
                {content.material[locale]}:{" "}
            </h3>
            <p>{item.material[locale]}</p>
            <h3>
                {content.style[locale]}:
            </h3>
            <p>{item.style[locale]}</p>
        </div>
    );
};