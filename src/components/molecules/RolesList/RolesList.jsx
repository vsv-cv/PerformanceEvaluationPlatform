import React, { useState, useCallback } from 'react';
import {
  ROLES_LIST_QUERY_KEY,
  QUERY_URL,
  LIST_COLUMNS,
  DEFAULT_FETCH_PARAMS,
} from './const';
import { formatData } from './utils';
import { getRows, getSortingParam } from '../../../utils';
import { ListWithFilters } from '../../templates/ListWithFilters';
import { Button } from '../../atoms/Button';
import List from '../../atoms/List';
import RolesListSidebar from './RolesListSidebar';
import { useInfiniteQueryData } from '../../../hooks/useInfiniteQueryData';

export const RolesList = () => {
  const [fetchParams, setFetchParams] = useState(DEFAULT_FETCH_PARAMS);
  const [sortingParams, setSortingParams] = useState({
    columnId: 'title',
    type: 'up',
  });

  const { data, isLoading, isFetching, refetch, fetchNextPage, hasNextPage } =
    useInfiniteQueryData(ROLES_LIST_QUERY_KEY, QUERY_URL, fetchParams);

  const refetchData = useCallback(() => {
    refetch(ROLES_LIST_QUERY_KEY);
  }, [refetch]);

  const formattedData = formatData(data);
  const listRows = getRows(formattedData);

  const handleClickOnSort = sortingConfig => {
    setFetchParams(prev => ({
      ...prev,
      TitleSortOrder: getSortingParam(sortingConfig, 'title'),
      IsPrimarySortOrder: getSortingParam(sortingConfig, 'isPrimary'),
    }));
    setSortingParams(sortingConfig);
    setTimeout(refetchData);
  };

  return isLoading ? (
    'Loading...'
  ) : (
    <ListWithFilters
      title="Roles"
      button={
        <Button size="large" onClick={() => console.log('Click on add role!')}>
          add role
        </Button>
      }
      list={
        <List
          columns={LIST_COLUMNS}
          rows={listRows}
          onScrollToGetNewData={fetchNextPage}
          onSortChange={handleClickOnSort}
          sortedColumn={sortingParams}
          hasNextPage={hasNextPage}
        />
      }
      sidebar={
        <RolesListSidebar
          fetchParams={fetchParams}
          setFetchParams={setFetchParams}
          isLoading={isFetching}
          refetchData={refetchData}
        />
      }
    />
  );
};
