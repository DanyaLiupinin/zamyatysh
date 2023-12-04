import axios from "axios";
import { BASE_URL } from "../../../../../constants/constants";
import { useInfiniteQuery } from 'react-query';



export function useFetchProducts({limit, ...params}: any) {
    return useInfiniteQuery(
        ['fetch-products'],
        ({ pageParam = 0 }) =>
            getAllProducts({...params, offset: pageParam}), {
            getNextPageParam: (lastPage, allPages) => {
                const total = lastPage.count;
                const currentCount = allPages.reduce(
                    (prev, current) => current.items.length + prev,
                    0
                );
                if (total > currentCount) {
                    return limit;
                }

                return undefined;
            }
            //,...options,
        }
    );
}

async function getAllProducts({ ...params }) {
    const response = await axios
        .get<any>(
            `${BASE_URL}/api/items`,
            {
                params,
            }
        );
    return response.data;
}  
