import { useSelector } from 'react-redux';
import { Dispatch, SetStateAction } from 'react';
import dropdowns from '@images/dropdown.svg';
import { TLanguage, ICategory } from '@types';
import { Dropdown, DropdownTrigger } from '@components';

import './DropdownMenu.scss';
import content from '../../../../../locale/Filters.json';

type DropdownMenuProps = {
    dropdown: boolean,
    categories: ICategory[],
    onClickFilter: (category: string) => void,
    setDropdown: Dispatch<SetStateAction<boolean>>
}

export const DropdownMenu: React.FC<DropdownMenuProps> = ({ dropdown, categories, onClickFilter, setDropdown }) => {

    const activeCategoryFilter = useSelector((state: any) => state.items.activeCategoryFilter);

    return (
        <div className='filters__dropdown'>

            <DropdownTrigger 
                dropdown={dropdown}
                activeCategoryFilter={activeCategoryFilter}
                dropdownToggle={() => setDropdown(!dropdown)}
            />

            <Dropdown
                categories={categories}
                activeCategoryFilter={activeCategoryFilter}
                dropdown={dropdown}
                clickHandler={onClickFilter}
            />
        </div>
    );
};