import { BASE_API_URL } from '../../api/const';

export const FIELD_GROUPS_LIST_QUERY_KEY = 'teamsList';
export const FIELD_GROUPS_LIST_QUERY_URL = `${BASE_API_URL}/teams`;

export const LIST_COLUMNS = [
  {
    id: 'title',
    name: 'Title',
    sort: true,
  },
  {
    id: 'projectIds',
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
  {
    id: 'edit',
    name: '',
    sort: false,
  },
];

export const DEFAULT_FETCH_PARAMS = {
    ProjectIds: [],
    OrderByTeamTitle: 1,
    OrderByProjectTitle: 1,
    OrderByTeamSize: 1,
    Search: '',
    Take: 20,
};