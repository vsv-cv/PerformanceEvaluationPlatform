import React from 'react';
import { LIST_COLUMNS } from './const';
import { ListTemplate } from '../../templates/ListTemplate';
import { List } from '../../atoms/List';
import { Button } from '../../atoms/Button';
import DocumentsListSidebar from './DocumentsListSidebar';
import { useDocumentsList } from './hooks/useDocumentsList';

export const DocumentsList = () => {
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
  } = useDocumentsList();

  return isLoading ? (
    'Loading...'
  ) : (
    <ListTemplate
      title="Documents"
      button={
        <Button
          size="medium"
          onClick={() => console.log('Click on add document!')}
        >
          Add document
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
        <DocumentsListSidebar
          fetchParams={fetchParams}
          setFetchParams={setFetchParams}
          isLoading={isFetching}
          refetch={refetch}
        />
      }
    />
  );
};
