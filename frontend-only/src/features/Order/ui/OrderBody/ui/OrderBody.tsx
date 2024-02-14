import { FC, ReactNode } from "react";
import './OrderBody.scss';

type OrderBodyProps = {
    children: ReactNode;
    date: string;
    price: any;
}

export const OrderBody: FC<OrderBodyProps> = ({date, price = 0, children}) => {
    return (
        <div className='orderBody'>
            <div className='orderBody__info'>
                <p className='orderBody__date'>{date}</p>
                <p className='orderBody__status'>paid</p>
            </div>
            {children}
            <p className='orderBody__price'>total: {price}</p>
        </div>
    );
};