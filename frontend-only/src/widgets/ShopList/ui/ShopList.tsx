import { useState } from 'react';
import { useSelector } from 'react-redux';
import { BasketNotification, BasketNotificationContainer, VisibleItems } from '@features';
import { TLanguage, IItem } from '@types';
import useVisibleItems from '../lib/useVisibleItems'; 
import { selectLocale } from '../model/selectors';

import content from '@locale/ItemInformation.json';

import './ShopList.scss';

export const ShopList: React.FC = () => {

    const [visibleItems, setVisibleItems] = useState<IItem[] | []>([]);
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
