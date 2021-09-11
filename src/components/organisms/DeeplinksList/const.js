import { BASE_API_URL } from '../../../api';

export const DEEPLINKS_STATES_QUERY_KEY = 'deeplinksStates';
export const DEEPLINKS_STATES_QUERY_URL = `${BASE_API_URL}/deeplinks/states`;

export const USERS_LIST_QUERY_KEY = 'usersList';
export const USERS_LIST_QUERY_URL = `${BASE_API_URL}/Users`;

export const DEEPLINKS_LIST_QUERY_KEY = 'deeplinksList';
export const DEEPLINKS_LIST_QUERY_URL = `${BASE_API_URL}/deeplinks`;

export const SORTING_FIELDS_CONFIG = {
  OrderSentTo: 'sentTo',
  OrderExpiresAt: 'expiresAt',
};

export const LIST_COLUMNS = [
  {
    id: 'sentTo',
    name: 'Sent to',
    sort: true,
  },
  {
    id: 'expiresAt',
    name: 'Expires at',
    sort: true,
  },
  {
    id: 'state',
    name: 'State',
    sort: false,
  },
  {
    id: 'formTemplateName',
    name: 'Form template name',
    sort: false,
  },
];

export const DEFAULT_FETCH_PARAMS = {
  SentToId: [],
  ExpiresAtFrom: '',
  ExpiresAtTo: '',
  OrderSentTo: 1,
  OrderExpiresAt: 1,
  StateIds: [],
  Take: 30,
  Search: '',
};

export const DEFAULT_SORTING_PARAMS = {
  columnId: 'sentTo',
  type: 'up',
};
