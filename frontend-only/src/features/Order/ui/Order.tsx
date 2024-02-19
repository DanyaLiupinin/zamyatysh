import { FC, useState } from "react";
import { getFinalPrice } from "@handlers";

import { OrderItems } from "./OrderItems";
import { OrderHeader } from "./OrderHeader";
import { OrderBody } from "./OrderBody";

import { IOrderProps } from "../model/types/types";

export const Order: FC<IOrderProps> = ({ id, items, date }) => {
    const [isOrderOpened, setOrderOpened] = useState(false);

    const price = getFinalPrice(items);

    return (
        <div>
            <OrderHeader
                id={id}
                onClickOrder={() => setOrderOpened(!isOrderOpened)}
            />
            {isOrderOpened &&
                <OrderBody
                    date={date}
                    price={price}
                >
                    <OrderItems items={items} />
                </OrderBody>
            }
        </div>
    );
};

