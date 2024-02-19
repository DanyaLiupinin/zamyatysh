import { IBasketShort } from "@types";


export interface IBasketItemProps {
    id: number,
    deleteItemHandler: (id: number) => void;
    shortItem: IBasketShort
}