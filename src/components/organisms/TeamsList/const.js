import { BASE_API_URL } from '../../../api';

export const PROJECTS_QUERY_KEY = 'projectsOptions';
export const PROJECTS_QUERY_URL = `${BASE_API_URL}​/projects`;

export const TEAMS_LIST_QUERY_KEY = 'teamsList';
export const TEAMS_LIST_QUERY_URL = `${BASE_API_URL}/teams`;

export const SORTING_FIELDS_CONFIG = {
  OrderByTeamTitle: 'title',
  OrderByProjectTitle: 'projectTitle',
  OrderByTeamSize: 'size',
};

export const DEFAULT_SORTING_PARAMS = {
  columnId: 'title',
  type: 'up',
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
    sort: false,
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
  OrderByProjectTitle: null,
  OrderByTeamSize: null,
  Take: 30,
  Search: '',
};

export const PROJECTS_OPTIONS_MOCK = [
  {
    key: '1',
    text: 'Project 1',
  },
  {
    key: '2',
    text: 'Project 2',
  },
];
