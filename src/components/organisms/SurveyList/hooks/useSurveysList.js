import { useList } from '../../../../hooks/useList';
import {
  DEFAULT_FETCH_PARAMS,
  DEFAULT_SORTING_PARAMS,
  SURVEY_LIST_QUERY_URL,
  SURVEY_LIST_QUERY_KEY,
  SORTING_FIELDS_CONFIG,
} from '../const';
import { formatData } from '../utils';

export const useSurveysList = () => {
  return useList({
    defaultFetchParams: DEFAULT_FETCH_PARAMS,
    defaultSortingParams: DEFAULT_SORTING_PARAMS,
    queryUrl: SURVEY_LIST_QUERY_URL,
    queryKey: SURVEY_LIST_QUERY_KEY,
    sortingFieldsConfig: SORTING_FIELDS_CONFIG,
    formatData: formatData,
  });
};
