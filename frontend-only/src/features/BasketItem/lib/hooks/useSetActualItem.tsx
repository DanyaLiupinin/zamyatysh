import { items } from "@constants";
import { IBasketShort, IItem } from "@types";
import { Dispatch, SetStateAction, useEffect } from "react";

interface useSetActualItemProps {
    shortItem: IBasketShort,
    setItem: Dispatch<SetStateAction<IItem | ''>>;
}

export const useSetActualItem = ({shortItem, setItem}: useSetActualItemProps) => {
    useEffect(() => {
        const actualItem = items.find(i => Number(i.id) === Number(shortItem.id));
        if (actualItem)
            setItem(actualItem);
    }, []);
}