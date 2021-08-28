import { BASE_API_URL } from '../../api/const';

export const USERS_LIST_QUERY_KEY = 'usersList';
export const USERS_LIST_QUERY_URL = `${BASE_API_URL}/Users`;

export const DOC_TYPES_LIST_QUERY_KEY = 'documentTypes';
export const DOC_TYPES_USERS_LIST_QUERY_URL = `${BASE_API_URL}/documents/types`;

export const DOCUMENTS_LIST_QUERY_KEY = 'DocumentsList';
export const QUERY_URL = `${BASE_API_URL}/documents`;
export const LIST_COLUMNS = [
  {
    id: 'userName',
    name: 'User Name',
    sort: true,
  },
  {
    id: 'documentTypeName',
    name: 'Type',
    sort: true,
  },
  {
    id: 'validToDate',
    name: 'Valid to',
    sort: false,
  },
  {
    id: 'fileName',
    name: 'File name',
    sort: false,
  },
  {
    id: 'download',
    name: 'Download',
    sort: false,
  },
];

export const DEFAULT_FETCH_PARAMS = {
  UserIds: null,
  TypeIds: null,
  ValidTo: '',
  NameSortOrder: 1,
  TypeSortOrder: null,
  Take: 20,
  Search: '',
};
