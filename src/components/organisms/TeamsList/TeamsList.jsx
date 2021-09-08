import React from 'react';
import { LIST_COLUMNS } from './const';
import { ListTemplate } from '../../templates/ListTemplate';
import { Button } from '../../atoms/Button';
import List from '../../atoms/List';
import { TeamsListSidebar } from './TeamsListSidebar';
import { useTeamsList } from './hooks/useTeamsList.js';

export const TeamsList = () => {
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
  } = useTeamsList();

  return isLoading ? (
    'Loading...'
  ) : (
    <ListTemplate
      title="Teams"
      button={
        <Button size="medium" onClick={() => console.log('Click on add team!')}>
          add team
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
        <TeamsListSidebar
          fetchParams={fetchParams}
          setFetchParams={setFetchParams}
          isLoading={isLoading || isFetching}
          refetch={refetch}
        />
      }
    />
  );
};
