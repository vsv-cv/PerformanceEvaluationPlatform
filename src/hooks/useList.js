import { useState, useEffect } from 'react';
import { useInfiniteQuery } from 'react-query';
import axios from 'axios';
import qs from 'qs';
import { filterEmptyValues, getRows, getSortingFields } from '../utils';

export const useList = ({
  defaultFetchParams,
  defaultSortingParams,
  queryUrl,
  queryKey,
  sortingFieldsConfig,
  formatData,
}) => {
  const [fetchParams, setFetchParams] = useState(defaultFetchParams);
  const [sortingParams, setSortingParams] = useState(defaultSortingParams);
  const [shouldRefetch, setShouldRefetch] = useState(false);

  const fetchList = async ({ pageParam }) => {
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

  const query = useInfiniteQuery(queryKey, fetchList, queryConfig);
  const rows = getRows(formatData(query.data));
  const refetchData = () => setShouldRefetch(true);

  const handleClickOnSort = sortingConfig => {
    setFetchParams(prev => ({
      ...prev,
      ...getSortingFields(sortingFieldsConfig, sortingConfig),
    }));
    setSortingParams(sortingConfig);
    refetchData();
  };

  useEffect(() => {
    if (!shouldRefetch) return;

    query.refetch();
    setShouldRefetch(false);
  }, [shouldRefetch, query, query.refetch]);

  return {
    rows,
    ...query,
    refetch: refetchData,
    fetchParams,
    setFetchParams,
    sortingParams,
    setSortingParams,
    handleClickOnSort,
  };
};
