import { itemsActions, useActionCreators } from '@store';

export const useFilterFunctions = () => {
    const { setCategoryFilter } = useActionCreators(itemsActions);

    const onClickFilter = (category: string) => {
        setCategoryFilter(category);
    };

    const onClearFilter = () => {
        setCategoryFilter(null);
    };

    return {
        onClickFilter,
        onClearFilter,
    };
};
