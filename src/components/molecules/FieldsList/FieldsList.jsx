import React, { useState, useEffect } from 'react';
import {
  FIELDS_LIST_QUERY_KEY,
  FIELDS_LIST_QUERY_URL,
  LIST_COLUMNS,
  FIELDS_TYPES_LIST_QUERY_KEY,
  FIELDS_TYPES_USERS_LIST_QUERY_URL,
  DEFAULT_FETCH_PARAMS,
  ASSESMENT_GROUP_QUERY_KEY,
  ASSESMENT_GROUP_QUERY_URL,
} from './const';
import { formatData } from './utils';
import { getRows, getSortingParam } from '../../../utils';
import { ListWithFilters } from '../../templates/ListWithFilters';
import List from '../../atoms/List';
import { Button } from '../../atoms/Button';
import FieldsListSidebar from './FieldsListSidebar';
import { useInfiniteQueryData } from '../../../hooks/useInfiniteQueryData';
import { useQuery } from 'react-query';
import axios from 'axios';

export const FieldsList = () => {
  const [fetchParams, setFetchParams] = useState(DEFAULT_FETCH_PARAMS);
  const [sortedParams, setSortedParams] = useState({
    columnId: 'name',
    type: 'up',
  });

  const { data, isLoading, isFetching, refetch, fetchNextPage, hasNextPage } =
    useInfiniteQueryData(
      FIELDS_LIST_QUERY_KEY,
      FIELDS_LIST_QUERY_URL,
      fetchParams
    );

  const { data: fieldsTypeData } = useQuery(FIELDS_TYPES_LIST_QUERY_KEY, () =>
    axios
      .get(FIELDS_TYPES_USERS_LIST_QUERY_URL, { params: { Take: 10 } })
      .then(response => response.data)
  );
  const fieldsType = fieldsTypeData?.map(fieldsType => ({
    key: fieldsType.id + '',
    text: fieldsType.name,
  }));

  const { data: assesmentGroupData } = useQuery(ASSESMENT_GROUP_QUERY_KEY, () =>
    axios
      .get(ASSESMENT_GROUP_QUERY_URL, { params: { Take: 10 } })
      .then(response => response.data)
  );
  let assesmentGroup = assesmentGroupData?.map(assesmentGroup => ({
    key: assesmentGroup.id + '',
    text: assesmentGroup.name,
  }));

  if (!assesmentGroup) {
    assesmentGroup = [{ key: '0', text: '0' }];
  }

  const formattedData = formatData(data);
  const listRows = getRows(formattedData);

  const handleClickOnSort = sortingConfig => {
    setFetchParams(prev => ({
      ...prev,
      FieldNameSortOrder: getSortingParam(sortingConfig, 'name'),
    }));
    setSortedParams(sortingConfig);
  };

  useEffect(() => {
    refetch(FIELDS_LIST_QUERY_URL);
  }, [fetchParams]); // eslint-disable-line

  return isLoading ? (
    'Loading...'
  ) : (
    <ListWithFilters
      title="Fields"
      button={
        <Button
          size="large"
          onClick={() => console.log('Click on add document!')}
        >
          Add field
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
        <FieldsListSidebar
          fetchParams={fetchParams}
          setFetchParams={setFetchParams}
          isLoading={isFetching}
          fieldsType={fieldsType}
          assesmentGroup={assesmentGroup}
        />
      }
    />
  );
};
