import { useSelector } from 'react-redux';

import { TLocale } from '../../types/components';
import BasketNotification from '../BasketNotification/BasketNotification';
import content from '../../locale/ItemList.json';

import tshirtdefault from '../../images/tshirtdefault.png';

import ShopCard from './ShopCard/ShopCard';

import './ShopList.scss';

const ShopList: React.FC<any> = () => {

    const items = useSelector((state: any) => state.items.items);
    const locale: TLocale = useSelector((state: any) => state.items.locale);

    return (
        <div className='itemList'>
            <div className='itemList__container'>
                <div className='itemCard__sticky-notification-container'>
                    <BasketNotification />
                </div>

                {/*image={i?.attributes?.image?.data[0]?.attributes?.url} */}
                {
                    items && items.length > 0 ? items.map((i: any) => {
                        return (
                            <ShopCard
                                title={i.attributes.title}
                                price={i.attributes.price}
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

export default ShopList;