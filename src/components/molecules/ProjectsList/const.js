import { BASE_API_URL } from "../../api/const";

export const ROLES_LIST_QUERY_KEY = "/projects";
export const QUERY_URL = `${BASE_API_URL}/roles`;
export const LIST_COLUMNS = [
  {
    id: 'title',
    name: 'Title',
    sort: true
  },
  {
    id: 'isPrimary',
    name: 'isPrimary',
    sort: true
  },
  {
    id: 'usersCount',
    name: 'User count',
    sort: true
  }
];

export const DEFAULT_FETCH_PARAMS = {
  Search: '',
  IsPrimary: null,
  UsersCountFrom: '1',
  UsersCountTo: '100',
  Take: 20,
  TitleSortOrder: 1
}