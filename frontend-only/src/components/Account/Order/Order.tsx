import React, { useState } from "react";
import "./Order.scss";

import dropdown from "../../../images/dropdown.svg";

import { TLocale } from "../../../types/components";
import content from '../../../locale/Order.json';
import { useSelector } from "react-redux";

interface IItemProps {
    id: number,
    size: string,
    price: string
}

interface IOrderProps {
    id: number, 
    items: IItemProps[]
}

const Order = ({id, items}: IOrderProps) => {
    const [isOrderOpened, setOrderOpened] = useState(false);

    const locale: TLocale = useSelector((state: any) => state.items.locale);

    return (
        <>
            <div className='order'>
                <div className='order__card'>
                    <p className='order__title'>{content.order[locale]}#{id}</p>
                    <button
                        className='order__details-btn'
                        onClick={() => setOrderOpened(!isOrderOpened)}
                    >
                        <img src={dropdown} alt='open order details' />
                    </button>
                </div>

                {isOrderOpened && (
                    <div className='order-details'>

                        <div className='order-details__info'>
                            <p className='order-details__date'>20.09.2023</p>
                            <p className='order-details__status'>oplacheno</p>
                        </div>
                        <div className='order-details__items'>
                            {
                                items?.length > 0 && items.map((item) => {
                                    return (
                                    <div className='order-item'>
                                        <p>name</p>
                                        <p>{item.size}</p>
                                        <p>{item.price}</p>
                                    </div>
                                    )
                                })

                            }


                        </div>
                        <p className='order-details__total'>total: 200000 kwaks</p>
                    </div>
                )}
            </div>
        </>
    );
};

export default Order;
