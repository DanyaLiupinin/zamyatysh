import { FC } from "react";
import { OrderBodyProps } from "features/Order/model/types/types";
import './OrderBody.scss';

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