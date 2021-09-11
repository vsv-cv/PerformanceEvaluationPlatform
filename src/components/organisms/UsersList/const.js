import { BASE_API_URL } from '../../../api';

export const USERS_LIST_QUERY_KEY = 'usersList';
export const USERS_LIST_QUERY_URL = `${BASE_API_URL}/Users`;

export const SORTING_FIELDS_CONFIG = {
  UserName: 'firstName',
  UserNextPE: 'nextPEDate',
  UserPreviousPE: 'previousPEDate',
};

export const LIST_COLUMNS = [
  {
    id: 'firstName',
    name: 'FirstName',
    sort: true,
  },
  {
    id: 'lastName',
    name: 'LastName',
    sort: false,
  },
  {
    id: 'email',
    name: 'Email',
    sort: false,
  },
  {
    id: 'teamName',
    name: 'Team Name',
    sort: false,
  },
  {
    id: 'roleName',
    name: 'Role',
    sort: false,
  },
  {
    id: 'levelName',
    name: 'Level',
    sort: false,
  },
  {
    id: 'previousPEDate',
    name: 'Previous PE date',
    sort: true,
    date: true,
  },
  {
    id: 'nextPEDate',
    name: 'Next PE date',
    sort: true,
    date: true,
  },
  {
    id: 'stateName',
    name: 'State',
    sort: false,
  },
];

export const DEFAULT_FETCH_PARAMS = {
  EmailOrName: '',
  NextPEDate: '',
  RoleIds: [],
  StateIds: [],
  UserName: 1,
  UserNextPE: null,
  UserPreviousPE: null,
  Take: 30,
  Skip: 0,
};

export const DEFAULT_SORTING_PARAMS = {
  columnId: 'firstName',
  type: 'up',
};

export const ROLE_OPTIONS = [
  {
    key: '1',
    text: 'Backend',
  },
  {
    key: '2',
    text: 'Frontend',
  },
  {
    key: '3',
    text: 'QA',
  },
  {
    key: '4',
    text: 'Team Lead',
  },
];

export const LEVEL_OPTIONS = [
  {
    key: '1',
    text: 'Junior',
  },
  {
    key: '2',
    text: 'Middle',
  },
];
