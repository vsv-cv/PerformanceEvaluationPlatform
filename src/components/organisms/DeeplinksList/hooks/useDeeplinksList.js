import { useList } from '../../../../hooks/useList';
import {
  DEFAULT_FETCH_PARAMS,
  DEFAULT_SORTING_PARAMS,
  DEEPLINKS_LIST_QUERY_URL,
  DEEPLINKS_LIST_QUERY_KEY,
  SORTING_FIELDS_CONFIG,
} from '../const';
import { formatData } from '../utils';

export const useDeeplinksList = () => {
  return useList({
    defaultFetchParams: DEFAULT_FETCH_PARAMS,
    defaultSortingParams: DEFAULT_SORTING_PARAMS,
    queryUrl: DEEPLINKS_LIST_QUERY_URL,
    queryKey: DEEPLINKS_LIST_QUERY_KEY,
    sortingFieldsConfig: SORTING_FIELDS_CONFIG,
    formatData: formatData,
  });
};
