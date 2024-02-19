// filtersUtils.ts
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useClearFilters = (onClearFilter: () => void) => {
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === '/shop') {
            onClearFilter();
        }
    }, [location.pathname]);
};
