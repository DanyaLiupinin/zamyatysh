import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { categories } from '@constants';
import {itemsActions, useActionCreators } from '@store';
import { ClearFilters } from '@components';

import { DesktopMenu } from '../content/DesktopMenu';
import { DropdownMenu } from '../content/DropdownMenu';
import './Filters.scss';

export const Filters: React.FC = () => {

    const [dropdown, setDropdown] = useState(false);
    const activeCategoryFilter = useSelector((state: any) => state.items.activeCategoryFilter);
    const { setCategoryFilter } = useActionCreators(itemsActions);
    const location = useLocation();

    const onClickFilter = (category: string) => {
        setCategoryFilter(category);
        setDropdown(false);
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
                    dropdown={dropdown}
                    categories={categories}
                    onClickFilter={onClickFilter}
                    setDropdown={setDropdown}
                />
            </div>
        </div>
    );
};