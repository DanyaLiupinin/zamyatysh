import './DesktopMenu.scss';
import { useSelector } from 'react-redux';

import { TLocale } from '../../../types/components';
import { ICategory } from '../../../types/types';

export const DesktopMenu = ({ categories, onClickFilter }:
    {
        categories: ICategory[],
        onClickFilter: (id: number) => void,
    }
) => {

    const activeCategoryFilter = useSelector((state: any) => state.items.activeCategoryFilter);
    const locale: TLocale = useSelector((state: any) => state.items.locale);

    return (
        <div className='desktopMenu'>
            {
                categories && categories.map((category: any) => {
                    return (
                        <button className={`filters__button ${activeCategoryFilter === category.id && 'filters__button_active'}`} onClick={() => onClickFilter(category.id)} type='button' key={category.id}>{`${category.title[locale]}`}</button>
                    );
                })
            }
        </div>
    );
};