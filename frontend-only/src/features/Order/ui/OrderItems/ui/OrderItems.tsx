import { FC } from "react";
import { useSelector } from "react-redux";
import { items as itemsList } from "@constants";
import { TLanguage } from "@types";
import './OrderItems.scss';

type OrderItemsProps = { 
    items: any;
}

export const OrderItems: FC<OrderItemsProps> = ({items}) => {

    const locale: TLanguage = useSelector((state: any) => state.items.locale);

    return (
        <div className='order-details__items'>
            {items?.length > 0 && items.map((item: any, index: any) => {
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
    );
};