import React, { useState, useEffect } from 'react'
import {
  LIST_COLUMNS,
  QUERY_URL,
  DEFAULT_FILTER_VALUES,
  DEFAULT_TITLE_SORT_ORDER_VALUE,
  DEFAULT_TAKE_VALUE
} from './const'
import { formatData, getRows } from './utils'
import { ListWithFilters } from '../../templates/ListWithFilters'
import { Button } from '../../atoms/Button'
import List from '../../atoms/List'
import RolesListSidebar from './RolesListSidebar'
import axios from 'axios'
import { useQuery } from 'react-query'

export const RolesList = () => {
  const [filterValues, setFilterValues] = useState(DEFAULT_FILTER_VALUES);
  const [titleSortOrder, setTitleSortOrder] = useState(DEFAULT_TITLE_SORT_ORDER_VALUE);
  const fetchRolesList = () => axios
    .get(QUERY_URL, {
      params: {
        ...filterValues,
        TitleSortOrder: titleSortOrder,
        Take: DEFAULT_TAKE_VALUE,
      }
    })
    .then(res => res.data);

  const { data, isLoading, isFetching, refetch } = useQuery('roles', fetchRolesList);
  const formattedData = formatData(data);
  const listRows = getRows(formattedData);

  const handleCleanFilterValues = () => {
    setFilterValues(DEFAULT_FILTER_VALUES);
  }
  const handleClickOnSort = () => {
    setTitleSortOrder(prev => prev === 1 ? 2 : 1);
  }
  const handleScrollPagination = () => {
    console.log('handleScrollPagination');
  }

  useEffect(() => {
    refetch('roles');
  }, [filterValues, titleSortOrder]); // eslint-disable-line

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
            onScrollToGetNewData={handleScrollPagination}
            onSortChange={handleClickOnSort}
            sortedColumn={{
              columnId: 'title',
              type: 'up'
            }}
          />
        }
        sidebar={
          <RolesListSidebar
            filterValues={filterValues}
            setFilterValues={setFilterValues}
            isLoading={isFetching}
            onCleanFilterValues={handleCleanFilterValues}
          />
        }
      />
  );


}
