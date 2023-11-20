import './Orders.scss';

import Order from '../Order/Order';
import { TLocale } from '../../../types/components';
import { useSelector } from 'react-redux';

import content from '../../../locale/Orders.json';

const Orders = () => {

    const locale: TLocale = useSelector((state: any) => state.items.locale);

    return (
        <div className='orders' >
            <h2>{content.orders[locale]}</h2>
            <div className='orders__order-cards' >
                {/* 
<p className='orders__empty'>you dont have orders yet</p>
*/}

                <Order />
                <Order />
                <Order />
                <Order />
                <Order />
                <Order />

            </div>
        </div>
    );
};

export default Orders;