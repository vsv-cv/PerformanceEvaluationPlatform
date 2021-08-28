import { BASE_API_URL } from '../../api/const';

export const FIELDS_LIST_QUERY_KEY = 'fieldsList';
export const FIELDS_LIST_QUERY_URL = `${BASE_API_URL}/fields`;

export const FIELDS_TYPES_LIST_QUERY_KEY = 'fieldsTypes';
export const FIELDS_TYPES_USERS_LIST_QUERY_URL = `${BASE_API_URL}/fields/types`;

export const ASSESMENT_GROUP_QUERY_KEY = 'assesmentsGroup';
export const ASSESMENT_GROUP_QUERY_URL = `${BASE_API_URL}/assessments/groups`;

export const LIST_COLUMNS = [
  {
    id: 'name',
    name: 'Name',
    sort: true,
  },
  {
    id: 'type',
    name: 'Type',
    sort: false,
  },
  {
    id: 'assesmentGroupId',
    name: 'Assesment Group',
    sort: false,
  },
  {
    id: 'isRequired',
    name: 'Is required',
    sort: false,
  },
];

export const DEFAULT_FETCH_PARAMS = {
  AssesmentGroupIds: null,
  TypeIds: null,
  FieldNameSortOrder: 1,
  Take: 20,
  Search: '',
};
