import React, { useState, useCallback } from 'react';
import {
  FORMS_STATES_QUERY_KEY,
  FORMS_STATES_QUERY_URL,
  FORMS_LIST_QUERY_KEY,
  FORMS_LIST_QUERY_URL,
  LIST_COLUMNS,
  DEFAULT_FETCH_PARAMS,
} from './const';
import { formatData } from './utils';
import { getSortingParam, getRows } from '../../../utils';
import { ListWithFilters } from '../../templates/ListWithFilters';
import { Button } from '../../atoms/Button';
import List from '../../atoms/List';
import { FormsListSidebar } from './FormsListSidebar';
import { useInfiniteQueryData } from '../../../hooks/useInfiniteQueryData';
import { useQuery } from 'react-query';
import axios from 'axios';

export const FormsList = () => {
  const [fetchParams, setFetchParams] = useState(DEFAULT_FETCH_PARAMS);
  const [sortingParams, setSortingParams] = useState({
    columnId: 'formName',
    type: 'up',
  });

  const { data: surveysStatesData } = useQuery(FORMS_STATES_QUERY_KEY, () =>
    axios.get(FORMS_STATES_QUERY_URL).then(response => response.data)
  );
  const states = surveysStatesData?.map(state => ({
    key: state.id,
    text: state.name,
  }));

  const { data, isLoading, isFetching, refetch, fetchNextPage, hasNextPage } =
    useInfiniteQueryData(
      FORMS_LIST_QUERY_KEY,
      FORMS_LIST_QUERY_URL,
      fetchParams
    );

  const refetchData = useCallback(() => {
    refetch(FORMS_LIST_QUERY_KEY);
  }, [refetch]);

  const formattedData = formatData(data);
  const listRows = getRows(formattedData);

  const handleClickOnSort = sortingConfig => {
    setFetchParams(prev => ({
      ...prev,
      FormNameSortOrder: getSortingParam(sortingConfig, 'formName'),
      AssigneeSortOrder: getSortingParam(sortingConfig, 'assignee'),
    }));
    setSortingParams(sortingConfig);
    setTimeout(refetchData);
  };

  return isLoading ? (
    'Loading...'
  ) : (
    <ListWithFilters
      title="Forms"
      button={
        <Button size="large" onClick={() => console.log('Click on add!')}>
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
          hasNextPage={hasNextPage}
        />
      }
      sidebar={
        <FormsListSidebar
          fetchParams={fetchParams}
          setFetchParams={setFetchParams}
          isLoading={isLoading || isFetching}
          states={states}
          refetchData={refetchData}
        />
      }
    />
  );
};
