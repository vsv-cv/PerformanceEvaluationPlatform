import React, { useState, useEffect } from 'react'
import {
  ROLES_LIST_QUERY_KEY,
  LIST_COLUMNS,
  DEFAULT_FETCH_PARAMS
} from './const'
import { formatData, getRows } from './utils'
import { ListWithFilters } from '../../templates/ListWithFilters'
import { Button } from '../../atoms/Button'
import List from '../../atoms/List'
import RolesListSidebar from './RolesListSidebar'
import { useDataQuery } from './hooks/useDataQuery'

export const RolesList = () => {
  const [fetchParams, setFetchParams] = useState(DEFAULT_FETCH_PARAMS);

  const {
    data,
    isLoading,
    isFetching,
    refetch,
    fetchNextPage
  } = useDataQuery(fetchParams);

  const formattedData = formatData(data);
  const listRows = getRows(formattedData);

  const handleCleanFilterValues = () => {
    setFetchParams(DEFAULT_FETCH_PARAMS);
  }
  const handleClickOnSort = () => {
    setFetchParams(prev => ({
      ...prev, 
      TitleSortOrder: prev.TitleSortOrder === 1 ? 2 : 1
    }));
  }

  useEffect(() => {
    refetch(ROLES_LIST_QUERY_KEY);
  }, [fetchParams]); // eslint-disable-line

  return isLoading
    ? 'Loading...'
    : (
      <ListWithFilters
        title="Roles"
        button={
          <Button
            size="large"
            onClick={()=> console.log('Click on add role!')}
          >
            add role
          </Button>
        }
        list={
          <List
            columns={LIST_COLUMNS}
            rows={listRows}
            onScrollToGetNewData={fetchNextPage}
            onSortChange={handleClickOnSort}
            sortedColumn={{
              columnId: 'title',
              type: 'up'
            }}
          />
        }
        sidebar={
          <RolesListSidebar
          fetchParams={fetchParams}
            setFetchParams={setFetchParams}
            isLoading={isFetching}
            onCleanFilterValues={handleCleanFilterValues}
          />
        }
      />
  );
}
