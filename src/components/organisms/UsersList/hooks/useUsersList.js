import { useList } from '../../../../hooks/useList';
import {
  DEFAULT_FETCH_PARAMS,
  DEFAULT_SORTING_PARAMS,
  USERS_LIST_QUERY_URL,
  USERS_LIST_QUERY_KEY,
  SORTING_FIELDS_CONFIG,
} from '../const';
import { formatData } from '../utils';

export const useUsersList = () => {
  return useList({
    defaultFetchParams: DEFAULT_FETCH_PARAMS,
    defaultSortingParams: DEFAULT_SORTING_PARAMS,
    queryUrl: USERS_LIST_QUERY_URL,
    queryKey: USERS_LIST_QUERY_KEY,
    sortingFieldsConfig: SORTING_FIELDS_CONFIG,
    formatData: formatData,
  });
};
