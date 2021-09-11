import { BASE_API_URL } from '../../../api';

export const ROLES_LIST_QUERY_KEY = 'rolesList';
export const ROLES_LIST_QUERY_URL = `${BASE_API_URL}/roles`;

export const SORTING_FIELDS_CONFIG = {
  TitleSortOrder: 'title',
  IsPrimarySortOrder: 'isPrimary',
};

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
  Take: 30,
  TitleSortOrder: 1,
  IsPrimarySortOrder: null,
};

export const DEFAULT_SORTING_PARAMS = {
  columnId: 'title',
  type: 'up',
};
