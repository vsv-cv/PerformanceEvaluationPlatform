import React, { useState, useEffect } from 'react';
import {
  DOCUMENTS_LIST_QUERY_KEY,
  QUERY_URL,
  LIST_COLUMNS,
  USERS_LIST_QUERY_KEY,
  USERS_LIST_QUERY_URL,
  DEFAULT_FETCH_PARAMS,
  DOC_TYPES_LIST_QUERY_KEY,
  DOC_TYPES_USERS_LIST_QUERY_URL,
} from './const';
import { formatData } from './utils';
import { getRows, getSortingParam } from '../../../utils';
import { ListWithFilters } from '../../templates/ListWithFilters';
import List from '../../atoms/List';
import { Button } from '../../atoms/Button';
import DocumentsListSidebar from './DocumentsListSidebar';
import { useInfiniteQueryData } from '../../../hooks/useInfiniteQueryData';
import { useQuery } from 'react-query';
import axios from 'axios';

export const DocumentsList = () => {
  const [fetchParams, setFetchParams] = useState(DEFAULT_FETCH_PARAMS);
  const [sortedParams, setSortedParams] = useState({
    columnId: 'userName',
    type: 'up',
  });

  const { data, isLoading, isFetching, refetch, fetchNextPage, hasNextPage } =
    useInfiniteQueryData(DOCUMENTS_LIST_QUERY_KEY, QUERY_URL, fetchParams);

  const { data: userData } = useQuery(USERS_LIST_QUERY_KEY, () =>
    axios
      .get(USERS_LIST_QUERY_URL, { params: { Take: 10 } })
      .then(response => response.data)
  );
  const users = userData?.map(user => ({
    key: user.id + '',
    text: user.firstName + ' ' + user.lastName,
  }));

  const { data: docTypesData } = useQuery(DOC_TYPES_LIST_QUERY_KEY, () =>
    axios
      .get(DOC_TYPES_USERS_LIST_QUERY_URL, { params: { Take: 10 } })
      .then(response => response.data)
  );
  const docTypes = docTypesData?.map(user => ({
    key: user.id + '',
    text: user.typeName,
  }));

  const formattedData = formatData(data);
  const listRows = getRows(formattedData);

  const handleClickOnSort = sortingConfig => {
    setFetchParams(prev => ({
      ...prev,
      NameSortOrder: getSortingParam(sortingConfig, 'userName'),
      TypeSortOrder: getSortingParam(sortingConfig, 'documentTypeName'),
    }));

    setSortedParams(sortingConfig);
  };

  useEffect(() => {
    refetch(DOCUMENTS_LIST_QUERY_KEY);
  }, [fetchParams]); // eslint-disable-line

  return isLoading ? (
    'Loading...'
  ) : (
    <ListWithFilters
      title="Documents"
      button={
        <Button
          size="large"
          onClick={() => console.log('Click on add document!')}
        >
          Add document
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
        <DocumentsListSidebar
          fetchParams={fetchParams}
          setFetchParams={setFetchParams}
          isLoading={isFetching}
          users={users}
          docTypes={docTypes}
        />
      }
    />
  );
};
