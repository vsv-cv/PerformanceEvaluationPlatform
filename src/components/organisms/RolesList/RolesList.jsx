import React from 'react';
import { LIST_COLUMNS } from './const';
import { ListTemplate } from '../../templates/ListTemplate';
import { Button } from '../../atoms/Button';
import List from '../../atoms/List';
import { RolesListSidebar } from './RolesListSidebar';
import { useRolesList } from './hooks/useRolesList';

export const RolesList = () => {
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
  } = useRolesList();

  return isLoading ? (
    'Loading...'
  ) : (
    <ListTemplate
      title="Roles"
      button={
        <Button size="medium" onClick={() => console.log('Click on add role!')}>
          add role
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
        <RolesListSidebar
          fetchParams={fetchParams}
          setFetchParams={setFetchParams}
          isLoading={isFetching}
          refetch={refetch}
        />
      }
    />
  );
};
