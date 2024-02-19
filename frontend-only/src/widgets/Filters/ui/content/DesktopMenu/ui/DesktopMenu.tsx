import './DesktopMenu.scss';
import { useSelector } from 'react-redux';
import { TLanguage } from '@types';

import { selectActiveFilters, selectLanguage } from '../../../../model/selectors';
import { DesktopMenuProps } from '../../../../model/types/types';

export const DesktopMenu: React.FC<DesktopMenuProps> = ({ categories, onClickFilter }) => {
    const activeCategoryFilter = useSelector(selectActiveFilters);
    const locale: TLanguage = useSelector(selectLanguage);

    return (
        <div className='desktopMenu'>
            {
                categories &&
                categories.map((category: any) => {
                    return (
                        <button className={`
                        desktopMenu__button 
                        ${activeCategoryFilter === category.title[locale] ? 'desktopMenu__button_active' : ''}`}
                            onClick={() => onClickFilter(category.title[locale])}
                            type='button' key={category.id}>
                            {`${category.title[locale]}`}
                        </button>
                    );
                })
            }
        </div>
    );
};