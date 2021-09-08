import React from 'react';
import { LIST_COLUMNS } from './const';
import { ListTemplate } from '../../templates/ListTemplate';
import List from '../../atoms/List';
import { Button } from '../../atoms/Button';
import FieldsListSidebar from './FieldsListSidebar';
import { useFieldsList } from './hooks/useFieldsList';

export const FieldsList = () => {
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
  } = useFieldsList();

  return isLoading ? (
    'Loading...'
  ) : (
    <ListTemplate
      title="Fields"
      button={
        <Button
          size="medium"
          onClick={() => console.log('Click on add document!')}
        >
          Add field
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
        <FieldsListSidebar
          fetchParams={fetchParams}
          setFetchParams={setFetchParams}
          isLoading={isFetching}
          refetch={refetch}
        />
      }
    />
  );
};
