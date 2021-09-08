import React from 'react';
import { LIST_COLUMNS } from './const';
import { ListTemplate } from '../../templates/ListTemplate';
import { Button } from '../../atoms/Button';
import { List } from '../../atoms/List';
import { FormTemplatesListSidebar } from './FormTemplatesListSidebar';
import { useFormTemplatesList } from './hooks/useFormTemplatesList';

export const FormTemplatesList = () => {
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
  } = useFormTemplatesList();

  return isLoading ? (
    'Loading...'
  ) : (
    <ListTemplate
      title="Form templates list"
      button={
        <Button size="medium" onClick={() => console.log('Click on add role!')}>
          add form template
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
        <FormTemplatesListSidebar
          fetchParams={fetchParams}
          setFetchParams={setFetchParams}
          isLoading={isLoading || isFetching}
          refetch={refetch}
        />
      }
    />
  );
};
