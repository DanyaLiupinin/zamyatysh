import { FC } from "react";
import { useSelector } from "react-redux";
import { TLanguage } from "@types";
import { items as itemsList } from "@constants";
import { OrderItem } from "@components";
import { OrderItemsProps } from "features/Order/model/types/types";

import { selectLanguage } from '../../../model/selectors/selectors';
import './OrderItems.scss';

export const OrderItems: FC<OrderItemsProps> = ({ items }) => {
    const locale: TLanguage = useSelector(selectLanguage);
    return (
        <div className='orderItems'>
            {items?.length > 0 && items.map((item: any, index: any) => {
                const foundItem = itemsList.find(i => i.id === Number(item.id));
                if (foundItem) {
                    const { title } = foundItem;
                    return (
                        <OrderItem
                            key={index}
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