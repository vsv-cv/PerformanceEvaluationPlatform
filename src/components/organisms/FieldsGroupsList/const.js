import { BASE_API_URL } from '../../../api';

export const FIELD_GROUPS_LIST_QUERY_KEY = 'fieldRoles';
export const FIELD_GROUPS_LIST_QUERY_URL = `${BASE_API_URL}/fields/groups`;

export const SORTING_FIELDS_CONFIG = {
  TitleSetOrder: 'title',
  FieldCountSetOrder: 'fieldCount',
};

export const LIST_COLUMNS = [
  {
    id: 'title',
    name: 'Title',
    sort: true,
  },
  {
    id: 'fieldCount',
    name: 'Fields count',
    sort: true,
  },
];

export const DEFAULT_FETCH_PARAMS = {
  IsNotEmptyOnly: false,
  CountFrom: '',
  CountTo: '',
  TitleSetOrder: 1,
  FieldCountSetOrder: null,
  Search: '',
  Take: 30,
};

export const DEFAULT_SORTING_PARAMS = {
  columnId: 'title',
  type: 'up',
};
