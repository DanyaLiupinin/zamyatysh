import { FC } from 'react';
import { TLanguage } from '@types';
import { useSelector } from 'react-redux';
import content from '@locale/Basket.json';

import {MakeOrderProps} from '../../../model/types/types';
import {selectLanguage} from '../../../model/selectors/selectors';
import './MakeOrder.scss';

export const MakeOrder: FC<MakeOrderProps> = ({finalPrice, makeOrderHandler}) => {
    const locale: TLanguage = useSelector(selectLanguage);
    return (
        <div className='makeOrder'>
            <p>{content.finalPrice[locale]} {finalPrice} {content.kwaks[locale]}</p>
            <button onClick={makeOrderHandler} className='makeOrder__submit' type='button'>
                {content.buy[locale]}
            </button>
        </div>
    );
};
