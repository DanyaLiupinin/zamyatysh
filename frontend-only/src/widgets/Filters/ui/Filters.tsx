import { useSelector } from 'react-redux';
import { categories } from '@constants';
import { ClearFilters } from '@components';

import { selectActiveFilters } from '../model/selectors';
import { useFilterFunctions } from '../lib/useFiltersFunctions';
import { useClearFilters } from '../lib/useClearFilters';

import { DesktopMenu } from './content/DesktopMenu';
import { DropdownMenu } from './content/DropdownMenu';
import './Filters.scss';

export const Filters: React.FC = () => {

    const activeCategoryFilter = useSelector(selectActiveFilters);
    const { onClickFilter, onClearFilter } = useFilterFunctions();
    useClearFilters(onClearFilter);

    return (
        <div className='filters'>
            <div className='filters__container'>
                <DesktopMenu
                    categories={categories}
                    onClickFilter={onClickFilter}
                />
                {
                    activeCategoryFilter &&
                    <ClearFilters onClickHandler={onClearFilter} isActive={true} />
                }
                <DropdownMenu
                    categories={categories}
                    onClickFilter={onClickFilter}
                />
            </div>
        </div>
    );
};