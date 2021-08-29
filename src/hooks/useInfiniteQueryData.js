import axios from 'axios';
import { filterEmptyValues } from '../utils';
import { useInfiniteQuery } from 'react-query';
import qs from 'qs';

export const useInfiniteQueryData = (queryKey, queryUrl, fetchParams = {}) => {
  const handleFetch = async ({ pageParam }) => {
    const response = await axios.get(queryUrl, {
      params: {
        ...fetchParams,
        ...pageParam,
      },
      paramsSerializer: params =>
        qs.stringify(filterEmptyValues(params), { indices: false }),
    });

    return response.data;
  };

  const queryConfig = {
    getNextPageParam: (lastPage, allPages) => {
      const totalCount = allPages.concat.apply([], allPages).length;

      return lastPage.length < fetchParams.Take
        ? undefined
        : {
            ...fetchParams,
            Skip: totalCount,
          };
    },
  };

  return useInfiniteQuery(queryKey, handleFetch, queryConfig);
};
