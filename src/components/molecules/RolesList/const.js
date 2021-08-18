import { BASE_API_URL } from "../../api/const";

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

export const DEFAULT_FILTER_VALUES = {
  Search: '',
  IsPrimary: null,
  UsersCountFrom: '1',
  UsersCountTo: '100',
}

export const DEFAULT_TITLE_SORT_ORDER_VALUE = 1;

export const DEFAULT_TAKE_VALUE = 20;