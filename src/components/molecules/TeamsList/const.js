export const USERS_LIST_QUERY_KEY = 'teamsList';

export const DEFAULT_FETCH_PARAMS = {
  Search: '',
  ProjectIds: [],
  OrderByTeamTitle: null,
  OrderByProjectTitle: null,
  OrderByTeamSize: null,
  Take: 20,
};

export const LIST_COLUMNS = [
  {
    id: 'title',
    name: 'Title',
    sort: true,
  },
  {
    id: 'projectTitle',
    name: 'Project',
    sort: true,
  },
  {
    id: 'size',
    name: 'Size',
    sort: true,
  },
  {
    id: 'teamLead',
    name: 'Team Lead',
    sort: false,
  },
];
