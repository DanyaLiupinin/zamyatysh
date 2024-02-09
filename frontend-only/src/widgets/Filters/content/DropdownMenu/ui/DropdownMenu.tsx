import { useSelector } from 'react-redux';
import { Dispatch, SetStateAction } from 'react';
import dropdowns from '@images/dropdown.svg';
import { TLanguage, ICategory } from '@types';
import { Dropdown } from '@components';

import './DropdownMenu.scss';
import content from '../../../../../locale/Filters.json';

type DropdownMenuProps = {
    categories: ICategory[],
    onClickFilter: (category: string) => void,
}

export const DropdownMenu: React.FC<DropdownMenuProps> = ({ categories, onClickFilter }) => {

    const activeCategoryFilter = useSelector((state: any) => state.items.activeCategoryFilter);

    return (
        <div className='filters__dropdown'>
            <Dropdown
                categories={categories}
                activeCategoryFilter={activeCategoryFilter}
                clickHandler={onClickFilter}
            />
        </div>
    );
};