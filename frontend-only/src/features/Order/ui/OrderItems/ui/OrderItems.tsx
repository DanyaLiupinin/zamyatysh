import { FC } from "react";
import { useSelector } from "react-redux";
import { items as itemsList } from "@constants";
import { TLanguage } from "@types";
import './OrderItems.scss';

import { OrderItem } from "@components";

type OrderItemsProps = {
    items: any;
}

export const OrderItems: FC<OrderItemsProps> = ({ items }) => {

    const locale: TLanguage = useSelector((state: any) => state.items.locale);

    return (
        <div className='orderItems'>
            {items?.length > 0 && items.map((item: any, index: any) => {
                const foundItem = itemsList.find(i => i.id === Number(item.id));
                if (foundItem) {
                    const { title } = foundItem;
                    return (
                        <OrderItem
                            title={title[locale]}
                            price={item.price}
                            size={item.size}
                        />
                    );
                }
                return null;
            })}
        </div>
    );
};