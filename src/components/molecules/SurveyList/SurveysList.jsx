import React, { useState, useEffect } from 'react'
import {
  ROLES_LIST_QUERY_KEY,
  LIST_COLUMNS,
  DEFAULT_FETCH_PARAMS
} from './const'
import { formatData, getRows } from './utils'
import { ListWithFilters } from '../../templates/ListWithFilters'
import { Button } from '../../atoms/Button'
import List from '../../atoms/List'
import { SurveysListSidebar } from './SurveysListSidebar'
import { useDataQuery } from './hooks/useDataQuery'

export const SurveysList = () => {
  const [fetchParams, setFetchParams] = useState(DEFAULT_FETCH_PARAMS);
  const [sortingParams, setSortingParams] = useState({});

  const {
    data,
    isLoading,
    isFetching,
    refetch,
    fetchNextPage
  } = useDataQuery(fetchParams);

  const formattedData = formatData(data);
  const listRows = getRows(formattedData);

  const handleCleanFilterValues = () => {
    setFetchParams(DEFAULT_FETCH_PARAMS);
  }
  const handleClickOnSort = ({ columnId, type }) => {
    const sortingConfig = {
      'formName': 'FormNameSortOrder',
      'assignee': 'AssigneeSortOrder',
    }

    const sortingType = sortingConfig[columnId];

    setFetchParams(prev => ({
      ...prev,
      [sortingType]: prev[sortingType] === 1 ? 2 : 1,
    }))

    setSortingParams({ columnId, type});
  }

  useEffect(() => {
    refetch(ROLES_LIST_QUERY_KEY);
  }, [fetchParams]); // eslint-disable-line

  return isLoading
    ? 'Loading...'
    : (
      <ListWithFilters
        title="Surveys"
        button={
          <Button
            size="large"
            onClick={()=> console.log('Click on add role!')}
          >
            add
          </Button>
        }
        list={
          <List
            columns={LIST_COLUMNS}
            rows={listRows}
            onScrollToGetNewData={fetchNextPage}
            onSortChange={handleClickOnSort}
            sortedColumn={sortingParams}
          />
        }
        sidebar={
          <SurveysListSidebar
            fetchParams={fetchParams}
            setFetchParams={setFetchParams}
            isLoading={isFetching}
            onCleanFilterValues={handleCleanFilterValues}
          />
        }
      />
  );
}
