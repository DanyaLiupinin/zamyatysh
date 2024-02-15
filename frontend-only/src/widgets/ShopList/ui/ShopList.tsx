import { useState } from 'react';
import { useSelector } from 'react-redux';
import { BasketNotification, BasketNotificationContainer, VisibleItems } from '@features';
import { TLanguage } from '@types';
import useVisibleItems from '../lib/useVisibleItems'; 
import { selectLocale } from '../model/selectors';

import content from '../../../locale/ItemList.json';

import './ShopList.scss';

export const ShopList: React.FC<any> = () => {

    const [visibleItems, setVisibleItems] = useState<any[] | []>([]);
    const locale: TLanguage = useSelector(selectLocale);
    useVisibleItems(setVisibleItems);

    return (
        <div className='itemList'>
            <div className='itemList__container'>
                <BasketNotificationContainer>
                    <BasketNotification />
                </BasketNotificationContainer>
                {
                    (!visibleItems || visibleItems?.length <= 0) &&
                    <p className='itemList__empty'>{content.empty[locale]}</p>
                }
                <VisibleItems
                    visibleItems={visibleItems}
                />
            </div>
        </div>
    );
};
