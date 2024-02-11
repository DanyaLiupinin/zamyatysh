import { FC } from 'react';
import { TLanguage } from '@types';
import { useSelector } from 'react-redux';

import content from '../../../../../locale/Basket.json';

import './MakeOrder.scss';

type MakeOrderProps = {
    finalPrice: number;
    makeOrderHandler: any
}

export const MakeOrder: FC<MakeOrderProps> = ({finalPrice, makeOrderHandler}) => {
    const locale: TLanguage = useSelector((state: any) => state.items.locale);
    return (
        <div className='makeOrder'>
            <p>{content.finalPrice[locale]} {finalPrice} {content.kwaks[locale]}</p>
            <button onClick={makeOrderHandler} className='makeOrder__submit' type='button'>
                {content.buy[locale]}
            </button>
        </div>
    );
};
