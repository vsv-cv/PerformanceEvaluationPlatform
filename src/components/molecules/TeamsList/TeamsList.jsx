import React, { useState, useEffect } from 'react';
import {
    FIELD_GROUPS_LIST_QUERY_KEY,
    FIELD_GROUPS_LIST_QUERY_URL,
    LIST_COLUMNS,
    DEFAULT_FETCH_PARAMS,
} from './const';
import { formatData } from './utils';
import { getRows, getSortingParam } from '../../../utils';
import { ListWithFilters } from '../../templates/ListWithFilters';
import { Button } from '../../atoms/Button';
import List from '../../atoms/List';
import { TeamsListSidebar } from './TeamsListSidebar';
import { useInfiniteQueryData } from '../../../hooks/useInfiniteQueryData';
import { useQuery } from 'react-query';
import axios from 'axios';

export const TeamsList = () => {
    const [fetchParams, setFetchParams] = useState(DEFAULT_FETCH_PARAMS);
    const [sortingParams, setSortingParams] = useState({
        columnId: 'name',
        type: 'up',
    });

//   const { data: formTemplatesStatusesData } = useQuery(FORM_TEMPLATES_STATUS_QUERY_KEY, () =>
//     axios.get(FORM_TEMPLATES_STATUS_QUERY_URL).then(response => response.data)
//   );
//   const statuses = formTemplatesStatusesData?.map(status => ({
//     key: status.id,
//     text: status.name,
//   }));

  const { data, isLoading, isFetching, refetch, fetchNextPage } =
    useInfiniteQueryData(
      FIELD_GROUPS_LIST_QUERY_KEY,
      FIELD_GROUPS_LIST_QUERY_URL,
      fetchParams
    );

  const formattedData = formatData(data);
  const listRows = getRows(formattedData);

  const handleCleanFilterValues = () => {
    setFetchParams(DEFAULT_FETCH_PARAMS);
  };
  const handleClickOnSort = sortingConfig => {
    setFetchParams(prev => ({
      ...prev,
      NameSortOrder: getSortingParam(sortingConfig, 'name')
    }));

    setSortingParams(sortingConfig);
  };

  useEffect(() => {
    refetch(FIELD_GROUPS_LIST_QUERY_KEY);
  }, [fetchParams]); // eslint-disable-line

  return isLoading ? (
    'Loading...'
  ) : (
    <ListWithFilters
      title="Teams"
      button={
        <Button size="large" onClick={() => console.log('Click on add role!')}>
          add team
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
        <TeamsListSidebar
          fetchParams={fetchParams}
          setFetchParams={setFetchParams}
        //   statuses={statuses}
          isLoading={isLoading || isFetching}
          onCleanFilterValues={handleCleanFilterValues}
        />
      }
    />
  );
}