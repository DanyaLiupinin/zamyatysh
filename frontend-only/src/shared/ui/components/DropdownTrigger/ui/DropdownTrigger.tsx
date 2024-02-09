import { FC } from "react";
import { TLanguage } from "@types";
import { useSelector } from "react-redux";
import dropdowns from '@images/dropdown.svg';
import './DropdownTrigger.scss';

import content from '../../../../../locale/Filters.json';

type DropdownTriggerProps = {
    dropdown: boolean,
    dropdownToggle: any,
    activeCategoryFilter: any
}

export const DropdownTrigger: FC<DropdownTriggerProps> = ({
    dropdown,
    dropdownToggle,
    activeCategoryFilter
}) => {

    const locale: TLanguage = useSelector((state: any) => state.items.locale);

    return (
        <button className='dropdownTrigger' onClick={dropdownToggle}>
            {activeCategoryFilter ? activeCategoryFilter : content.filters[locale]}
            <img className={`
            dropdownTrigger__icon
            ${dropdown ? 'dropdownTrigger__icon_up' : ''}`} 
            src={dropdowns} 
            alt='open dropdown icon' />
        </button>
    );
};