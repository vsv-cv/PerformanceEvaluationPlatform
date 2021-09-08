import { useList } from '../../../../hooks/useList';
import {
  DEFAULT_FETCH_PARAMS,
  DEFAULT_SORTING_PARAMS,
  FORMS_LIST_QUERY_URL,
  FORMS_STATES_QUERY_KEY,
  SORTING_FIELDS_CONFIG,
} from '../const';
import { formatData } from '../utils';

export const useFormsList = () => {
  return useList({
    defaultFetchParams: DEFAULT_FETCH_PARAMS,
    defaultSortingParams: DEFAULT_SORTING_PARAMS,
    queryUrl: FORMS_LIST_QUERY_URL,
    queryKey: FORMS_STATES_QUERY_KEY,
    sortingFieldsConfig: SORTING_FIELDS_CONFIG,
    formatData: formatData,
  });
};
