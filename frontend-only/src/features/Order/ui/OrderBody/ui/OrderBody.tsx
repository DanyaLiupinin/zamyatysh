import { FC, ReactNode } from "react";
import './OrderBody.scss';

type OrderBodyProps = {
    children: ReactNode;
    date: string;
    price: any;
}

export const OrderBody: FC<OrderBodyProps> = ({date, price = 0, children}) => {
    return (
        <div className='order-details'>
            <div className='order-details__info'>
                <p className='order-details__date'>{date}</p>
                <p className='order-details__status'>paid</p>
            </div>
            {children}
            <p className='order-details__total'>total: {price}</p>
        </div>
    );
};