import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { categories } from '@constants';
import { ClearFilters } from '@components';
import {itemsActions, useActionCreators } from '@store';
import { DesktopMenu } from './content/DesktopMenu';
import { DropdownMenu } from './content/DropdownMenu';
import { selectActiveFilters } from '../model/selectors';
import './Filters.scss';

export const Filters: React.FC = () => {

    const activeCategoryFilter = useSelector(selectActiveFilters);
    const { setCategoryFilter } = useActionCreators(itemsActions);
    const location = useLocation();

    const onClickFilter = (category: string) => {
        setCategoryFilter(category);
    };

    const onClearFilter = () => {
        setCategoryFilter(null);
    };

    useEffect(() => {
        if (location.pathname === '/shop') {
            setCategoryFilter(null);
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