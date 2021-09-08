import React from 'react';
import { LIST_COLUMNS } from './const';
import { ListTemplate } from '../../templates/ListTemplate';
import { Button } from '../../atoms/Button';
import { List } from '../../atoms/List';
import { UsersListSidebar } from './UsersListSidebar';
import { useUsersList } from './hooks/useUsersList.js';

export const UsersList = () => {
  const {
    rows,
    isLoading,
    isFetching,
    refetch,
    fetchNextPage,
    hasNextPage,
    fetchParams,
    setFetchParams,
    sortingParams,
    handleClickOnSort,
  } = useUsersList();

  return isLoading ? (
    'Loading...'
  ) : (
    <ListTemplate
      title="Users list"
      button={
        <Button size="medium" onClick={() => console.log('Click on add role!')}>
          add new user
        </Button>
      }
      list={
        <List
          columns={LIST_COLUMNS}
          rows={rows}
          onScrollToGetNewData={fetchNextPage}
          onSortChange={handleClickOnSort}
          sortedColumn={sortingParams}
          hasNextPage={hasNextPage}
        />
      }
      sidebar={
        <UsersListSidebar
          fetchParams={fetchParams}
          setFetchParams={setFetchParams}
          isLoading={isLoading || isFetching}
          refetch={refetch}
        />
      }
    />
  );
};
