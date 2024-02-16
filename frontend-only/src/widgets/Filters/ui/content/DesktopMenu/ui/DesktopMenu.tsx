import './DesktopMenu.scss';
import { useSelector } from 'react-redux';
import { TLanguage, ICategory } from '@types';
import { selectActiveFilters, selectLanguage } from '../../../../model/selectors';

type DesktopMenuProps = {
    categories: ICategory[],
    onClickFilter: (category: string) => void,
}

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
                        ${activeCategoryFilter === category ? 'desktopMenu__button_active' : ''}`}
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