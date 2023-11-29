
const useOrdersHistoryPagination = ({ useFetchHook, ...params }: any) => {

    const { data, isLoading, hasNextPage, isFetchingNextPage } = useFetchHook({ params });

    const products = data?.pages.flatMap((page: any[string]) => page.items) || [];
    const productsTotalCount = data?.pages[0].count;

    return {
        products,
        productsTotalCount,
        isLoading,
        isFetchingNextPage,
        hasNextPage,
    };
};

