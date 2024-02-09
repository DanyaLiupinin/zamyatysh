import './DesktopMenu.scss';
import { useSelector } from 'react-redux';
import { TLanguage, ICategory } from '@types';

type DesktopMenuProps = {
    categories: ICategory[],
    onClickFilter: (category: string) => void,
}

export const DesktopMenu: React.FC<DesktopMenuProps> = ({ categories, onClickFilter }) => {

    const activeCategoryFilter = useSelector((state: any) => state.items.activeCategoryFilter);
    const locale: TLanguage = useSelector((state: any) => state.items.locale);

    return (
        <div className='desktopMenu'>
            {
                categories &&
                categories.map((category: any) => {
                    return (
                        <button className={`
                        filters__button 
                        ${activeCategoryFilter === category ? 'filters__button_active' : ''}`}
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