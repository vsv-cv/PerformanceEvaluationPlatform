import React, { useState, useEffect } from 'react';
import {
  FIELD_GROUPS_LIST_QUERY_KEY,
  FIELD_GROUPS_LIST_QUERY_URL,
  LIST_COLUMNS,
  DEFAULT_FETCH_PARAMS,
} from './const';
import { formatData } from './utils';
import { getRows, getSortingParam } from '../../../utils';
import { ListWithFilters } from '../../templates/ListWithFilters';
import { Button } from '../../atoms/Button';
import List from '../../atoms/List';
import { FieldGroupsListSidebar } from './FieldGroupsListSidebar';
import { useInfiniteQueryData } from '../../../hooks/useInfiniteQueryData';

export const FieldGroupsList = () => {
  const [fetchParams, setFetchParams] = useState(DEFAULT_FETCH_PARAMS);
  const [sortingParams, setSortingParams] = useState({
    columnId: 'title',
    type: 'up',
  });

  const { data, isLoading, isFetching, refetch, fetchNextPage } =
    useInfiniteQueryData(
      FIELD_GROUPS_LIST_QUERY_KEY,
      FIELD_GROUPS_LIST_QUERY_URL,
      fetchParams
    );

  const formattedData = formatData(data);
  const listRows = getRows(formattedData);

  const handleCleanFilterValues = () => {
    setFetchParams(DEFAULT_FETCH_PARAMS);
  };
  const handleClickOnSort = sortingConfig => {
    setFetchParams(prev => ({
      ...prev,
      TitleSetOrder: getSortingParam(sortingConfig, 'title'),
      FieldCountSetOrder: getSortingParam(sortingConfig, 'fieldCount'),
    }));

    setSortingParams(sortingConfig);
  };

  useEffect(() => {
    refetch(FIELD_GROUPS_LIST_QUERY_KEY);
  }, [fetchParams]); // eslint-disable-line

  return isLoading ? (
    'Loading...'
  ) : (
    <ListWithFilters
      title="Field Groups"
      button={
        <Button size="large" onClick={() => console.log('Click on add role!')}>
          add
        </Button>
      }
      list={
        <List
          columns={LIST_COLUMNS}
          rows={listRows}
          onScrollToGetNewData={fetchNextPage}
          onSortChange={handleClickOnSort}
          sortedColumn={sortingParams}
        />
      }
      sidebar={
        <FieldGroupsListSidebar
          fetchParams={fetchParams}
          setFetchParams={setFetchParams}
          isLoading={isFetching}
          onCleanFilterValues={handleCleanFilterValues}
        />
      }
    />
  );
};
