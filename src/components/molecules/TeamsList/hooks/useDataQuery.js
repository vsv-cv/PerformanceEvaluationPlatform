import { useCallback } from 'react'
import axios from 'axios'
import { useInfiniteQuery } from 'react-query'
import {
  TEAMS_LIST_QUERY_KEY,
  QUERY_URL,
} from '../const'

export const useDataQuery = (fetchParams = {}) => {
  const handleFetch = useCallback(async ({ pageParam }) => {
    const response = await axios.get(QUERY_URL, {
      params: {
        ...fetchParams,
        ...pageParam
      }
    });
  
    return response.data;
  }, [fetchParams]);

  const query = useInfiniteQuery(
    TEAMS_LIST_QUERY_KEY,
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