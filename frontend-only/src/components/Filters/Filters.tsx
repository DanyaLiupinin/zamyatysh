import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { useActionCreators } from '../../store';
import { itemsActions } from '../../store/items/index';
import { categories } from '../../constants/constants';

import { DropdownMenu } from './DropdownMenu/DropdownMenu';
import { DesktopMenu } from './DesktopMenu/DesktopMenu';
import ClearFilters from './ClearFilters/CleartFilters';


import './Filters.scss';

const Filters: React.FC<any> = () => {

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

        // eslint-disable-next-line react-hooks/exhaustive-deps
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

export default Filters;