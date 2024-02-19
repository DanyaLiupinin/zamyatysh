import { FC } from "react";
import { useSelector } from "react-redux";
import { TLanguage } from "@types";
import { OrderBodyProps } from "features/Order/model/types/types";
import content from '@locale/Order.json';

import { selectLanguage } from '../../../model/selectors/selectors';
import './OrderBody.scss';

export const OrderBody: FC<OrderBodyProps> = ({ date, price = 0, children }) => {
    const locale: TLanguage = useSelector(selectLanguage);
    return (
        <div className='orderBody'>
            <div className='orderBody__info'>
                <p className='orderBody__date'>{date}</p>
                <p className='orderBody__status'>{content.paid[locale]}</p>
            </div>
            {children}
            <p className='orderBody__price'>{content.total[locale]}: {price}</p>
        </div>
    );
};