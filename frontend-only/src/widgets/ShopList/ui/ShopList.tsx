import { useSelector } from 'react-redux';

import { TLocale } from '../../../types/components';

import { BasketNotification } from '@features';
import content from '../../../locale/ItemList.json';

import { ShopCard } from '@components';

import './ShopList.scss';

// eslint-disable-next-line import/order
import { items } from '../../../constants/constants';
import { useEffect, useState } from 'react';
import { IItem } from '../../../types/types';

export const ShopList: React.FC<any> = () => {

    const [visibleItems, setVisibleItems] = useState<any[] | []>(items);

    const locale: TLocale = useSelector((state: any) => state.items.locale);
    const activeCategoryFilter = useSelector((state: any) => state.items.activeCategoryFilter);

useEffect(() => {
    if (activeCategoryFilter) {
        const filteredItems = items.filter((i: IItem) => {
            return i.category[locale] === activeCategoryFilter;
        });

        setVisibleItems(filteredItems);
    } else {
        setVisibleItems(items);
    }
}, [activeCategoryFilter]);

    return (
        <div className='itemList'>
            <div className='itemList__container'>
                <div className='itemCard__sticky-notification-container'>
                    <BasketNotification />
                </div>
                {
                    visibleItems?.length > 0 ? items.map((i: IItem) => {
                        return (
                            <ShopCard
                                title={i.title[locale]}
                                price={i.price}
                                images={i.images}
                                key={i.id}
                                id={i.id}
                            />
                        );
                    }) :
                        <p className='itemList__empty'>{content.empty[locale]}</p>
                }
            </div>
        </div>
    );
};