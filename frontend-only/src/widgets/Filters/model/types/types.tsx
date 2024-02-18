import { ICategory } from '@types';

export type DropdownMenuProps = {
    categories: ICategory[],
    onClickFilter: (category: string) => void,
}

export type DesktopMenuProps = {
    categories: ICategory[],
    onClickFilter: (category: string) => void,
}