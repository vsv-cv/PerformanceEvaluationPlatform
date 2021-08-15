import React from 'react'
import { useFetch } from '../../../hooks/useFetch'
import { columns, fetchUrl } from './const'
import { getRows } from './utils'
import List from '../../atoms/List'

export const RolesList = () => {
  const {
    isLoading,
    data
  } = useFetch(fetchUrl);
  const listRows = getRows(data);

  return isLoading
    ? 'Loading...'
    : (
      <List
        columns={columns}
        rows={listRows}
        onScrollToGetNewData={() => console.log('onScroll to get new data')}
        onSortChange={() => console.log('onSortChange')}
        sortedColumn={{
          columnId: 'title',
          type: 'up'
        }}
      />
  );
}
