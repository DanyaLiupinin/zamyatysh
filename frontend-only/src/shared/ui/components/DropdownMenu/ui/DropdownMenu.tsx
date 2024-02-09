import './DropdownMenu.scss';

import { useSelector } from 'react-redux';
import { Dispatch, SetStateAction } from 'react';

import content from '../../../../../locale/Filters.json';
import { TLocale } from '../../../../../types/components';
import dropdowns from '../../../../../images/dropdown.svg';
import { ICategory } from '../../../../../types/entitiesType';


export const DropdownMenu = ({ dropdown, categories, onClickFilter, setDropdown }:
    {
        dropdown: boolean,
        categories: ICategory[],
        onClickFilter: (category: string) => void,
        setDropdown: Dispatch<SetStateAction<boolean>>
    }
) => {

    const activeCategoryFilter = useSelector((state: any) => state.items.activeCategoryFilter);
    const locale: TLocale = useSelector((state: any) => state.items.locale);

    return (
        <div className='filters__dropdown'>
            
            <button className='filters__dropdown-toggle' onClick={() => setDropdown(!dropdown)}>
                {activeCategoryFilter ? activeCategoryFilter : content.filters[locale]}
                <img className={`filters__dropdown-image ${dropdown ? 'filters__dropdown-image_up' : ''}`} src={dropdowns} alt='dd'></img>
            </button>

            <div id='dropdown' className={`filters__dropdown-menu ${dropdown ? 'filters__dropdown-menu_show' : ''}`} >
                {
                    categories && categories.map((category: ICategory) => {
                        return (
                            category !== activeCategoryFilter ?
                                <button className='filters__dropdown-filter' onClick={() => onClickFilter(category.title[locale])} type='button' key={category.id}>{category.title[locale]}</button> :
                                ''
                        );
                    })
                }
            </div>
        </div>
    );
};