import React from 'react';
import { LIST_COLUMNS } from './const';
import { ListTemplate } from '../../templates/ListTemplate';
import List from '../../atoms/List';
import { Button } from '../../atoms/Button';
import { DeeplinksListSidebar } from './DeeplinksListSidebar';
import { useDeeplinksList } from './hooks/useDeeplinksList';

export const DeeplinksList = () => {
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
  } = useDeeplinksList();

  return isLoading ? (
    'Loading...'
  ) : (
    <ListTemplate
      title="Deeplinks"
      button={
        <Button size="medium" onClick={() => console.log('Click on add role!')}>
          add deeplink
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
        <DeeplinksListSidebar
          fetchParams={fetchParams}
          setFetchParams={setFetchParams}
          isLoading={isLoading || isFetching}
          refetch={refetch}
        />
      }
    />
  );
};
