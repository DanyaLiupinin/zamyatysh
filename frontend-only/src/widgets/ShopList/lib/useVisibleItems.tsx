import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { items } from '@constants';
import { TLanguage, IItem } from '@types';

const useCategoryFilterEffect = (setVisibleItems: (items: any[] | []) => void) => {
    const locale: TLanguage = useSelector((state: any) => state.items.locale);
    const activeCategoryFilter = useSelector((state: any) => state.items.activeCategoryFilter);

    useEffect(() => {
        if (activeCategoryFilter) {
            const filteredItems = items.filter((i: IItem) => {
                return i.category[locale] === activeCategoryFilter;
            });
            setVisibleItems(filteredItems);
        } else {
            setVisibleItems(items);
        }
    }, [activeCategoryFilter, locale]);
};

export default useCategoryFilterEffect;
