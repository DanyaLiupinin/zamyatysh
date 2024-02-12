import { FC, useState } from "react";
import { getFinalPrice } from "@handlers";
import dropdown from "@images/dropdown.svg";
import "./Order.scss";

import { OrderItems } from "./OrderItems";


interface IItemProps {
    id: number,
    size: string,
    price: string
}

interface IOrderProps {
    id: number,
    items: IItemProps[],
    date: string
}

export const Order: FC<IOrderProps> = ({ id, items, date }) => {
    const [isOrderOpened, setOrderOpened] = useState(false);

    const price  = getFinalPrice(items);

    return (
        <>
            <div className='order'>
                <div className='order__card'>
                    <p className='order__title'>
                        {/*content.order[locale]}#{id */}
                        order #{id}
                    </p>
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
                            <p className='order-details__date'>{date}</p>
                            <p className='order-details__status'>paid</p>
                        </div>
                        <OrderItems
                            items={items}
                        />
                        <p className='order-details__total'>total: {price}</p>
                    </div>
                )}
            </div>
        </>
    );
};

