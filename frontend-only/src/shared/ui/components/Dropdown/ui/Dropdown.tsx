import { FC } from "react";
import { ICategory, TLanguage } from "@types";
import { useSelector } from "react-redux";
import './Dropdown.scss';

type DropdownProps = {
    categories: any,
    activeCategoryFilter: any,
    dropdown: boolean,
    clickHandler: any
}

export const Dropdown: FC<DropdownProps> = ({ categories, dropdown, activeCategoryFilter, clickHandler }) => {

    const locale: TLanguage = useSelector((state: any) => state.items.locale);

    return (
        <div id='dropdown' className={`filters__dropdown-menu ${dropdown ? 'filters__dropdown-menu_show' : ''}`} >
            {
                categories && categories.map((category: ICategory) => {
                    return (
                        category !== activeCategoryFilter ?
                            <button className='filters__dropdown-filter' onClick={() => clickHandler(category.title[locale])} type='button' key={category.id}>{category.title[locale]}</button> :
                            ''
                    );
                })
            }
        </div>
    )
}