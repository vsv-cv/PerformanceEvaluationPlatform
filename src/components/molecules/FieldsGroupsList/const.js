import { BASE_API_URL } from "../../api/const";

export const ROLES_LIST_QUERY_KEY = 'fieldRoles';
export const QUERY_URL = `${BASE_API_URL}/fields/groups`;
export const LIST_COLUMNS = [
  {
    id: 'title',
    name: 'Title',
    sort: true
  },
  {
    id: 'fieldCount',
    name: 'Fields count',
    sort: true
  }
];

export const DEFAULT_FETCH_PARAMS = {
  IsNotEmptyOnly: false,
  CountFrom: '0',
  CountTo: '100',
  TitleSetOrder: 1,
  FieldCountSetOrder: 1,
  Search: '',
  Take: 20,
}