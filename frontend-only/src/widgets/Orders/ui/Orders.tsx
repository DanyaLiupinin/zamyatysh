import { Order } from '@components';
import { TLanguage } from '@types';
import { useSelector } from 'react-redux';
import { useGetOrders } from 'shared/hooks';

import content from '../../../locale/Orders.json';
import './Orders.scss';

export const Orders = () => {

    const locale: TLanguage = useSelector((state: any) => state.items.locale);

    const { orders } = useGetOrders();

    return (
        <div className='orders' >
            <h2>{content.orders[locale]}</h2>
            <div className='orders__order-cards' >
                {
                    orders && orders?.length > 0 &&
                    orders.map((order: any) => {
                        return (
                            <Order  
                                key={order.id}
                                id={order.id}
                                items={order.items}
                            />
                        );
                    })
                }
            </div>
        </div>
    );
};