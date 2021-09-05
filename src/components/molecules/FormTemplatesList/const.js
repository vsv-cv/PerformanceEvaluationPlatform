import { BASE_API_URL } from '../../api/const';

export const FORM_TEMPLATES_STATUS_QUERY_KEY = 'formTemplatesStatuses';
export const FORM_TEMPLATES_STATUS_QUERY_URL = `${BASE_API_URL}/formtemplates/statuses`;

export const FIELD_GROUPS_LIST_QUERY_KEY = 'formTemplatesList';
export const FIELD_GROUPS_LIST_QUERY_URL = `${BASE_API_URL}/formtemplates`;

export const LIST_COLUMNS = [
  {
    id: 'name',
    name: 'Name',
    sort: true,
  },
  {
    id: 'version',
    name: 'Version',
    sort: false,
  },
  {
    id: 'statusName',
    name: 'Status',
    sort: false,
  },
  {
    id: 'createdAt',
    name: 'Created at',
    sort: false,
  },
];

export const DEFAULT_FETCH_PARAMS = {
    StatusIds: [],
    NameSortOrder: 1,
    Search: '',
    Take: 20,
};