import React from 'react';
import { LIST_COLUMNS } from './const';
import { ListTemplate } from '../../templates/ListTemplate';
import { Button } from '../../atoms/Button';
import { List } from '../../atoms/List';
import { SurveysListSidebar } from './SurveysListSidebar';
import { useSurveysList } from './hooks/useSurveysList.js';

export const SurveysList = () => {
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
  } = useSurveysList();

  return isLoading ? (
    'Loading...'
  ) : (
    <ListTemplate
      title="Surveys"
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
        <SurveysListSidebar
          fetchParams={fetchParams}
          setFetchParams={setFetchParams}
          isLoading={isLoading || isFetching}
          refetch={refetch}
        />
      }
    />
  );
};
