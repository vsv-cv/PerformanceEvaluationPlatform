import React from 'react';
import { LIST_COLUMNS } from './const';
import { ListTemplate } from '../../templates/ListTemplate';
import { Button } from '../../atoms/Button';
import List from '../../atoms/List';
import { FieldGroupsListSidebar } from './FieldGroupsListSidebar';
import { useFieldGroupsList } from './hooks/useFieldGroupsList';

export const FieldGroupsList = () => {
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
  } = useFieldGroupsList();

  return isLoading ? (
    'Loading...'
  ) : (
    <ListTemplate
      title="Field Groups"
      button={
        <Button size="medium" onClick={() => console.log('Click on add role!')}>
          add
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
        <FieldGroupsListSidebar
          fetchParams={fetchParams}
          setFetchParams={setFetchParams}
          isLoading={isFetching}
          refetch={refetch}
        />
      }
    />
  );
};
