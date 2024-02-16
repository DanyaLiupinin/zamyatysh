import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { categories } from '@constants';
import { ClearFilters } from '@components';
import { DesktopMenu } from './content/DesktopMenu';
import { DropdownMenu } from './content/DropdownMenu';
import { selectActiveFilters } from '../model/selectors';
import { useFilterFunctions } from '../lib/useFiltersFunctions';
import './Filters.scss';

export const Filters: React.FC = () => {

    const activeCategoryFilter = useSelector(selectActiveFilters);
    const location = useLocation();
    const { onClickFilter, onClearFilter } = useFilterFunctions();

    useEffect(() => {
        if (location.pathname === '/shop') {
            onClearFilter();
        }
    }, [location.pathname]);

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