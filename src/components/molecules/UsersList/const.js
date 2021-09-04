export const USER_URL = 'https://pepwebappqa.azurewebsites.net/Users';

export const DEFAULT_FETCH_PARAMS = {
  NextPEDate: '',
  EmailOrName: '',
  RoleIds: [],
  StateIds: [],
  UserName: null,
  UserNextPE: null,
  UserPreviousPE: null,
  Take: 3,
  Skip: 0,
};

export const SORT_USERS_FETCH_PARAMS = {
  firstName: 'UserName',
  nextPEDate: 'UserNextPE',
  previousPEDate: 'UserPreviousPE',
};

export const SORT_USERS_PARAMS = {
  firstName: 1,
  nextPEDate: 1,
  previousPEDate: 1,
};


export const USERS_LIST_COLUMNS = [
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
