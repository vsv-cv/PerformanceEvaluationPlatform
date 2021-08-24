import axios from 'axios'
import { useInfiniteQuery } from 'react-query'

export const useInfiniteQueryData = (queryKey, queryUrl, fetchParams = {}) => {
  const handleFetch = async ({ pageParam }) => {
    const response = await axios.get(queryUrl, {
      params: {
        ...fetchParams,
        ...pageParam
      }
    });
  
    return response.data;
  };

  const query = useInfiniteQuery(
    queryKey,
    handleFetch,
    {
      getNextPageParam: (lastPage, allPages) => {
        const totalCount = allPages.concat.apply([], allPages).length;

        return lastPage.length < fetchParams.Take
          ? undefined
          : {
            ...fetchParams,
            Skip: totalCount
          }
      }
    }
  );

  return query;
}