import { useList } from '../../../../hooks/useList';
import {
  DEFAULT_FETCH_PARAMS,
  DEFAULT_SORTING_PARAMS,
  DOCUMENTS_LIST_QUERY_URL,
  DOCUMENTS_LIST_QUERY_KEY,
  SORTING_FIELDS_CONFIG,
} from '../const';
import { formatData } from '../utils';

export const useDocumentsList = () => {
  return useList({
    defaultFetchParams: DEFAULT_FETCH_PARAMS,
    defaultSortingParams: DEFAULT_SORTING_PARAMS,
    queryUrl: DOCUMENTS_LIST_QUERY_URL,
    queryKey: DOCUMENTS_LIST_QUERY_KEY,
    sortingFieldsConfig: SORTING_FIELDS_CONFIG,
    formatData: formatData,
  });
};
