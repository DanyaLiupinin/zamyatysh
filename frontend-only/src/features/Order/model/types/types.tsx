import { IBasketShort } from "@types";
import { ReactNode } from "react";

export interface IOrderProps {
    id: number,
    items: IBasketShort[],
    date: string
}

export type OrderItemsProps = {
    items: any;
}

export type OrderHeaderProps = {
    id: number;
    onClickOrder: () => void;
}

export type OrderBodyProps = {
    children: ReactNode;
    date: string;
    price: number | undefined;
}