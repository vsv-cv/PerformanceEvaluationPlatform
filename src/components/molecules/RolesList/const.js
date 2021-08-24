import { BASE_API_URL } from '../../api/const';

export const ROLES_LIST_QUERY_KEY = 'rolesList';
export const QUERY_URL = `${BASE_API_URL}/roles`;
export const LIST_COLUMNS = [
  {
    id: 'title',
    name: 'Title',
    sort: true,
  },
  {
    id: 'isPrimary',
    name: 'isPrimary',
    sort: true,
  },
  {
    id: 'usersCount',
    name: 'User count',
    sort: false,
  },
];

export const DEFAULT_FETCH_PARAMS = {
  Search: '',
  IsPrimary: null,
  UsersCountFrom: '',
  UsersCountTo: '',
  Take: 20,
  TitleSortOrder: 1,
  IsPrimarySortOrder: null,
};
