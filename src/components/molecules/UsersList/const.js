export const USERS_LIST_QUERY_KEY = 'users';

export const DEFAULT_FETCH_PARAMS = {
  NextPEDate: '',
  Search: '',
  RoleIds: [],
  StateIds: [],
  UserName: null,
  UserNextPE: null,
  UserPreviousPE: null,
  Take: 20,
};

export const CLEAN_PARAMS = {
  NextPEDate: '',
  Search: '',
  RoleIds: [],
  StateIds: [],
  UserName: null,
  UserNextPE: null,
  UserPreviousPE: null,
  Take: 20,
};

export const SORTING_PARAMS = {
  UserName: 1,
  UserNextPE: 1,
  UserPreviousPE: 1,
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
  },
  {
    id: 'nextPEDate',
    name: 'Next PE date',
    sort: true,
  },
  {
    id: 'stateName',
    name: 'State',
    sort: false,
  },
];
