import { BASE_API_URL } from '../../api/const';

export const PROJECTS_LIST_QUERY_KEY = 'projectsList';
export const PROJECTS_LIST_QUERY_URL = `${BASE_API_URL}/projects`;

export const SORTING_FIELDS_CONFIG = {
  TitleSortOrder: 'formName',
  StartDateSortOrder: 'assignee',
  CoordinatorSortOrder: '',
};

export const DEFAULT_SORTING_PARAMS = {
  columnId: 'шttle',
  type: 'up',
};

export const LIST_COLUMNS = [
  {
    id: 'title', //?
    name: 'Title',
    sort: true,
  },
  {
    id: 'startDate', //?
    name: 'Start date',
    sort: true,
  },
  {
    id: 'coordinator', //?
    name: 'Coordinator',
    sort: true,
  },
  {
    id: 'edit', //?
    name: '',
    sort: false,
  },
];

export const DEFAULT_FETCH_PARAMS = {
  CoordinatorIds: [],
  TitleSortOrder: 1,
  StartDateSortOrder: null,
  CoordinatorSortOrder: null,
  Take: 30,
  Search: '',
};
