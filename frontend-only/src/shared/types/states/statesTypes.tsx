import { IBasketShort, ICategory, IItem, TLanguage } from "@types";

export interface IItemsState {
    categories: ICategory[] | [] | null,
    items: IItem[] | [] | null,
    activeCategoryFilter: string | null,
    locale: TLanguage | null,
    basketItemsShort: IBasketShort | null
}

export interface IUsersState {
    loggedIn: boolean,
    username: string | null,
    id: number | null,
    email: string | null,
    error: string,
    redirectPath: string | null
}

export interface IRootState {
    items: IItemsState;
    user: IUsersState;
}