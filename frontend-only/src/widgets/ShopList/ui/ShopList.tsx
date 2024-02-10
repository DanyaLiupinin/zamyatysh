import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { BasketNotification } from '@features';
import { ShopCard } from '@components';
import { items } from '@constants';
import { TLanguage, IItem } from '@types';

import content from '../../../locale/ItemList.json';

import './ShopList.scss';

export const ShopList: React.FC<any> = () => {

    const [visibleItems, setVisibleItems] = useState<any[] | []>(items);
    const locale: TLanguage = useSelector((state: any) => state.items.locale);
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
