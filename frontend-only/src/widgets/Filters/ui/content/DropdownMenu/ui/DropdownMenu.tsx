import { useSelector } from 'react-redux';
import { ICategory } from '@types';
import { Dropdown } from '@components';
import { selectActiveFilters } from '../../../../model/selectors';
import './DropdownMenu.scss';

type DropdownMenuProps = {
    categories: ICategory[],
    onClickFilter: (category: string) => void,
}

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