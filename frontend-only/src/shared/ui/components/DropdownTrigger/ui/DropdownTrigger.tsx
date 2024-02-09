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
        <button className='filters__dropdown-toggle' onClick={dropdownToggle}>
            {activeCategoryFilter ? activeCategoryFilter : content.filters[locale]}
            <img className={`
            filters__dropdown-image 
            ${dropdown ? 'filters__dropdown-image_up' : ''}`} 
            src={dropdowns} 
            alt='open dropdown icon' />
        </button>
    );
};