import React, { useState, useEffect } from 'react';
import {
  DEEPLINKS_LIST_QUERY_KEY,
  QUERY_URL,
  LIST_COLUMNS,
  DEFAULT_FETCH_PARAMS,
  DEEPLINKS_STATES_QUERY_KEY,
  DEEPLINKS_STATES_QUERY_URL,
  USERS_LIST_QUERY_KEY,
  USERS_LIST_QUERY_URL,
} from './const';
import { formatData } from './utils';
import { getRows, getSortingParam } from '../../../utils';
import { ListWithFilters } from '../../templates/ListWithFilters';
import List from '../../atoms/List';
import { Button } from '../../atoms/Button';
import DeeplinksListSidebar from './DeeplinksListSidebar';
import { useInfiniteQueryData } from '../../../hooks/useInfiniteQueryData';
import { useQuery } from 'react-query';
import axios from 'axios';

export const DeeplinksList = () => {
  const [fetchParams, setFetchParams] = useState(DEFAULT_FETCH_PARAMS);
  const [sortedParams, setSortedParams] = useState({
    columnId: 'sentTo',
    type: 'down',
  });

  const { data, isLoading, isFetching, refetch, fetchNextPage, hasNextPage } =
    useInfiniteQueryData(DEEPLINKS_LIST_QUERY_KEY, QUERY_URL, fetchParams);

  const { data: surveysStatesData } = useQuery(DEEPLINKS_STATES_QUERY_KEY, () =>
    axios.get(DEEPLINKS_STATES_QUERY_URL).then(response => response.data)
  );
  const states = surveysStatesData?.map(state => ({
    key: state.id + '',
    text: state.name,
  }));

  const { data: userData } = useQuery(USERS_LIST_QUERY_KEY, () =>
    axios
      .get(USERS_LIST_QUERY_URL, { params: { Take: 10 } })
      .then(response => response.data)
  );
  const users = userData?.map(user => ({
    key: user.id + '',
    text: user.firstName + ' ' + user.lastName,
  }));

  const formattedData = formatData(data);
  const listRows = getRows(formattedData);

  const handleClickOnSort = sortingConfig => {
    setFetchParams(prev => ({
      ...prev,
      OrderSentTo: getSortingParam(sortingConfig, 'sentTo'),
      OrderExpiresAt: getSortingParam(sortingConfig, 'expiresAt'),
    }));

    setSortedParams(sortingConfig);
  };

  useEffect(() => {
    refetch(DEEPLINKS_LIST_QUERY_KEY);
  }, [fetchParams]); // eslint-disable-line

  return isLoading ? (
    'Loading...'
  ) : (
    <ListWithFilters
      title="Deeplinks"
      button={
        <Button size="large" onClick={() => console.log('Click on add role!')}>
          add deeplink
        </Button>
      }
      list={
        <List
          columns={LIST_COLUMNS}
          rows={listRows}
          onScrollToGetNewData={fetchNextPage}
          onSortChange={handleClickOnSort}
          sortedColumn={sortedParams}
          hasNextPage={hasNextPage}
        />
      }
      sidebar={
        <DeeplinksListSidebar
          fetchParams={fetchParams}
          setFetchParams={setFetchParams}
          isLoading={isFetching}
          states={states}
          users={users}
        />
      }
    />
  );
};
