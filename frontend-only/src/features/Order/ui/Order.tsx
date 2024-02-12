import { FC, useState } from "react";
import { items as itemsList } from "@constants";
import "./Order.scss";
import dropdown from "@images/dropdown.svg";
import { useSelector } from "react-redux";
import { TLanguage } from "@types";
import { getFinalPrice } from "@handlers";

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

    const locale: TLanguage = useSelector((state: any) => state.items.locale);

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
                        <div className='order-details__items'>
                            {items?.length > 0 && items.map((item, index) => {
                                const foundItem = itemsList.find(i => i.id === Number(item.id));
                                if (foundItem) {
                                    const { title } = foundItem;
                                    return (
                                        <div className='order-item' key={index}>
                                            <p>{title[locale]}</p>
                                            <p>{item.size}</p>
                                            <p>{item.price}</p>
                                        </div>
                                    );
                                }
                                return null;
                            })}

                        </div>
                        <p className='order-details__total'>total: {price}</p>
                    </div>
                )}
            </div>
        </>
    );
};

