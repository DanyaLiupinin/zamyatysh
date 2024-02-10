import { useSelector } from 'react-redux';

import './ItemInformation.scss';

import content from '../../../locale/ItemInformation.json';
import { TLanguage, IItem } from '@types';
import { FC } from 'react';

type ItemInformationProps = {
    item: IItem,
    className?: string
}

export const ItemInformation: FC<ItemInformationProps> = ({ item, className }) => {

    const locale: TLanguage = useSelector((state: any) => state.items.locale);

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