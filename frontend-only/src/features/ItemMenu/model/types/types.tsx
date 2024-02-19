import { IItem } from "@types";

export type IItemMenuProps = {
    item: IItem,
    chosenSize: string,
    setChosenSize: React.Dispatch<React.SetStateAction<string>>,
    isBasketItem: boolean,
    addItemHandler: () => void,
    basketItemCount: number;
    className?: string;
}

export type ItemSizesProps = {
    item: IItem,
    onSizeClick: any,
    chosenSize: string
}

export type AddItemProps = {
    chosenSize: string,
    onAddItem: any,
    isCaptionActive: any
}