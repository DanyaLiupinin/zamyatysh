import { useSelector } from 'react-redux';
import { Dropdown } from '@components';

import { selectActiveFilters } from '../../../../model/selectors';
import {DropdownMenuProps} from '../../../../model/types/types';
import './DropdownMenu.scss';

export const DropdownMenu: React.FC<DropdownMenuProps> = ({ categories, onClickFilter }) => {
    const activeCategoryFilter = useSelector(selectActiveFilters);
    return (
        <div className='dropdownMenu'>
            <Dropdown
                categories={categories}
                activeCategoryFilter={activeCategoryFilter}
                clickHandler={onClickFilter}
            />
        </div>
    );
};