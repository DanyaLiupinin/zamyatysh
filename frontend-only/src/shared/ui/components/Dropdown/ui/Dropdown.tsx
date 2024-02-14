
import { FC, useState } from "react";
import { TLanguage } from "@types";
// eslint-disable-next-line import/order
import { useSelector } from "react-redux";
import './Dropdown.scss';
import './DropdownTrigger.scss';

import dropdowns from '@images/dropdown.svg';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

import content from '../../../../../locale/Filters.json';

type DropdownProps = {
    categories: any,
    activeCategoryFilter: any,
    clickHandler: any,
}

export const Dropdown: FC<DropdownProps> = ({ categories, activeCategoryFilter, clickHandler }) => {

    const [dropdown, setDropdown] = useState(false);
    const locale: TLanguage = useSelector((state: any) => state.items.locale);

    return (
        <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
                <button className='dropdownTrigger' onClick={() => setDropdown(!dropdown)}>
                {activeCategoryFilter ? activeCategoryFilter : content.filters[locale]}
                <img className={`
                    dropdownTrigger__icon
                    ${dropdown ? 'dropdownTrigger__icon_up' : ''}`} 
                    src={dropdowns} 
                    alt='open dropdown icon' 
                />
            </button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Portal>
                <DropdownMenu.Content 
                className={`dropdown`}
                sideOffset={5}>
                    {categories && categories.map(({ id, title }: any) => (
                        id !== activeCategoryFilter && (
                            <DropdownMenu.Item key={id}>
                                <button className='dropdown__filter' onClick={() => clickHandler(title[locale])} type='button'>{title[locale]}</button>
                            </DropdownMenu.Item>
                        )
                    ))}
                </DropdownMenu.Content>
            </DropdownMenu.Portal>
        </DropdownMenu.Root>
    );
};