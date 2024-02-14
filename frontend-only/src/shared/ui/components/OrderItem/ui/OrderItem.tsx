import { FC } from 'react';
import './OrderItem.scss';

type OrderItemProps = {
    title: string;
    size: string;
    price: string;
}

export const OrderItem: FC<OrderItemProps> = ({title, size, price}) => {
    return (
        <div className='order-item'>
            <p>{title}</p>
            <p>{size}</p>
            <p>{price}</p>
        </div>
    );
};