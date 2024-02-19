import { Order } from '@features';
import { TLanguage } from '@types';
import { useSelector } from 'react-redux';
import { useGetOrders } from 'shared/hooks';
import content from '@locale/Orders.json';
import { selectLanguage } from '../model/selectors';
import './Orders.scss';

export const Orders = () => {

    const locale: TLanguage = useSelector(selectLanguage);
    const { orders } = useGetOrders();

    return (
        <div className='orders' >
            <h2>{content.orders[locale]}</h2>
            <div className='orders__list' >
                {
                    orders && orders?.length > 0 &&
                    orders.map((order: any) => {
                        return (
                            <Order
                                key={order.id}
                                id={order.id}
                                items={order.items}
                                date={order.date}
                            />
                        );
                    })
                }
            </div>
        </div>
    );
};