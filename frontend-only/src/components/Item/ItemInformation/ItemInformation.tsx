import { useSelector } from 'react-redux';

import content from '../../../locale/ItemInformation.json';
import { IItem } from '../../../types/types';
import { TLocale } from '../../../types/components';


export const ItemInformation = ({ item }: { item: IItem }) => {

    const locale: TLocale = useSelector((state: any) => state.items.locale);

    return (
        <div id='description' className='itemCard__item-description'>
            <h3>{content.description[locale]}:</h3>
            <p>{item.description[locale]}</p>
            <h3 className='itemCard__item-description-inline'>
                {content.material[locale]}:{" "}
            </h3>
            <p>{item.material[locale]}</p>
            <h3 className='itemCard__item-description-inline'>
                {content.style[locale]}:
            </h3>
            <p>{item.style[locale]}</p>
        </div>
    );
};