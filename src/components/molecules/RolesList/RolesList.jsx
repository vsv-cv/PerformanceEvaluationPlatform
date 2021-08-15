import React, { useState } from 'react'
import { useFetch } from '../../../hooks/useFetch'
import {
  LIST_COLUMNS,
  FETCH_URL,
  DEFAULT_FILTER_VALUES
} from './const'
import { getRows } from './utils'
import { ListWithFilters } from '../../templates/ListWithFilters'
import { Button } from '../../atoms/Button'
import List from '../../atoms/List'
import RolesListSidebar from './RolesListSidebar'

export const RolesList = () => {
  const {
    isLoading,
    data
  } = useFetch(FETCH_URL);
  const listRows = getRows(data);

  const [filterValues, setFilterValues] = useState(DEFAULT_FILTER_VALUES);

  const handleApplyFilterValues = () => {
    console.log('handleApplyFilterValues');
  }
  const handleCleanFilterValues = () => {
    setFilterValues(DEFAULT_FILTER_VALUES);
  }

  return isLoading
    ? 'Loading...'
    : (
      <ListWithFilters
        title="Roles"
        button={
          <Button
            size="large"
            onClick={()=> console.log('Clicked!')}
          >
            add role
          </Button>
        }
        list={
          <List
            columns={LIST_COLUMNS}
            rows={listRows}
            onScrollToGetNewData={() => console.log('onScroll to get new data')}
            onSortChange={() => console.log('onSortChange')}
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
            disabled={isLoading}
            onApplyFilterValues={handleApplyFilterValues}
            onCleanFilterValues={handleCleanFilterValues}
          />
        }
      />
  );


}
