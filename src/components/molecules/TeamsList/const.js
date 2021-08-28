export const USERS_LIST_QUERY_KEY = 'users';

export const DEFAULT_FETCH_PARAMS = {
  Search: '',
  ProjectIds: [],
  OrderByTeamTitle: 1,
  OrderByProjectTitle: 1,
  OrderByTeamSize: 1,
  Take: 20,
};

export const CLEAN_PARAMS = {
  Search: '',
  ProjectIds: [],
  OrderByTeamTitle: 1,
  OrderByProjectTitle: 1,
  OrderByTeamSize: 1,
  Take: 20,
};

export const LIST_COLUMNS = [
  {
    id: "firstName",
    name: "Title",
    sort: true,
  },
  {
    id: "lastName",
    name: "Project",
    sort: true,
  },
  {
    id: "email",
    name: "Size",
    sort: true,
  },
  {
    id: "teamName",
    name: "Team Lead",
    sort: false,
  },
];
