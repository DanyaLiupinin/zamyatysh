import { IBasketShort, ICategory, IItem, TLanguage } from "@types";

export interface IItemsState {
    categories: ICategory[] | [] | null,
    items: IItem[] | [] | null,
    activeCategoryFilter: string | null,
    locale: TLanguage,
    basketItemsShort: IBasketShort | null
}
export interface IRootState {
    items: IItemsState;
    user: any;
}