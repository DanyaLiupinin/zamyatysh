import { useState } from 'react';
import { useSelector } from 'react-redux';

import { useActionCreators } from '../../store';
import { TLocale } from '../../types/components';
import { itemsActions } from '../../store/items/index';

import { getCategories } from '../../utils/api';

import ClearFilters from './ClearFilters/CleartFilters';
import content from './locale.json';


import './Filters.scss';

const dropdowns = require('../../images/dropdown.png');

const Filters: React.FC<any> = () => {

    const [dropdown, setDropdown] = useState<Boolean>(false);

    const locale: TLocale = useSelector((state: any) => state.items.locale);

    const categories = useSelector((state: any) => state.items.categories);
    const activeCategoryFilter = useSelector((state: any) => state.items.activeCategoryFilter);

    const { getFilteredItemsThunk } = useActionCreators(itemsActions);

    const onClickFilter = (slug: String) => {
        getFilteredItemsThunk({ slug });
        setDropdown(false);
    };

    return (
        <div className='filters'>
            <div className='filters__buttons'>

                {/* desktop menu */}
                {
                    categories && categories.map((c: any) => {
                        return (
                            <button className={`filters__button ${activeCategoryFilter === c.attributes.slug && 'filters__button_active'}`} onClick={() => onClickFilter(c.attributes.slug)} type='button' key={c.id}>{c.attributes.name}</button>
                        );
                    })

                }
                <ClearFilters isActive={true} />
                {/* dropdown menu */}
                <div className='filters__dropdown'>
                    <button className='filters__dropdown-toggle' onClick={() => setDropdown(!dropdown)}>
                        {activeCategoryFilter ? activeCategoryFilter : content.filters[locale]}
                        <img className={`filters__dropdown-image ${dropdown ? 'filters__dropdown-image_up' : ''}`} src={dropdowns} alt='dd'></img>
                    </button>
                    <div id='dropdown' className={`filters__dropdown-menu ${dropdown ? 'filters__dropdown-menu_show' : ''}`} >
                        {
                            categories && categories.map((c: any) => {
                                return (
                                    c.attributes.slug !== activeCategoryFilter ?
                                        <button className='filters__dropdown-filter' onClick={() => onClickFilter(c.attributes.slug)} type='button' key={c.id}>{c.attributes.name}</button> :
                                        ''
                                );
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Filters;