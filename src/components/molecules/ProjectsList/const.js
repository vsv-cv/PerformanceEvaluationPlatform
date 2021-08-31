export const USERS_LIST_QUERY_KEY = 'projectList';

export const DEFAULT_FETCH_PARAMS = {
  Search: '',
  CoordinatorIds: [],
  TitleSortOrder: null,
  StartDateSortOrder: null,
  CoordinatorSortOrder: null,
  Take: 20,
};

export const CLEAN_PARAMS = {
  Search: '',
  CoordinatorIds: [],
  TitleSortOrder: null,
  StartDateSortOrder: null,
  CoordinatorSortOrder: null,
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
    name: "Start date",
    sort: true,
  },
  {
    id: "email",
    name: "Coordinator",
    sort: true,
  },
  {
    id: "empti",
    name: "",
    sort: false,
  },
];
