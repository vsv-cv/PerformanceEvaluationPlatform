import { BASE_API_URL } from '../../../api';

export const FORMS_LIST_QUERY_KEY = 'formsList';
export const FORMS_LIST_QUERY_URL = `${BASE_API_URL}/forms`;

export const FORMS_STATES_QUERY_KEY = 'formsStates';
export const FORMS_STATES_QUERY_URL = `${FORMS_LIST_QUERY_URL}/states`;

export const SORTING_FIELDS_CONFIG = {
  FormNameSortOrder: 'formName',
  AssigneeSortOrder: 'assignee',
};

export const LIST_COLUMNS = [
  {
    id: 'formName',
    name: 'Form Name',
    sort: true,
  },
  {
    id: 'assignee',
    name: 'Assignee',
    sort: true,
  },
  {
    id: 'reviewer',
    name: 'Reviewer',
    sort: false,
  },
  {
    id: 'appointmentDate',
    name: 'Appointment date',
    sort: false,
  },
  {
    id: 'state',
    name: 'State',
    sort: false,
  },
];

export const DEFAULT_FETCH_PARAMS = {
  AppointmentDateFrom: '',
  AppointmentDateTo: '',
  StateId: null,
  AssigneeIds: [],
  ReviewersIds: [],
  FormNameSortOrder: 1,
  AssigneeSortOrder: null,
  Take: 30,
  Search: '',
};

export const DEFAULT_SORTING_PARAMS = {
  columnId: 'formName',
  type: 'up',
};
