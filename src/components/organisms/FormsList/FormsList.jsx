import React from 'react';
import { useFormsList } from './hooks/useFormsList';
import { LIST_COLUMNS } from './const';
import { ListTemplate } from '../../templates/ListTemplate';
import { Button } from '../../atoms/Button';
import { List } from '../../atoms/List';
import { FormsListSidebar } from './FormsListSidebar';

export const FormsList = () => {
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
  } = useFormsList();

  return isLoading ? (
    'Loading...'
  ) : (
    <ListTemplate
      title="Forms"
      button={
        <Button size="medium" onClick={() => console.log('Click on add!')}>
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
        <FormsListSidebar
          fetchParams={fetchParams}
          setFetchParams={setFetchParams}
          isLoading={isLoading || isFetching}
          refetch={refetch}
        />
      }
    />
  );
};
