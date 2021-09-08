import { BASE_API_URL } from '../../api/const';

export const SURVEYS_STATES_QUERY_KEY = 'surveysStates';
export const SURVEYS_STATES_QUERY_URL = `${BASE_API_URL}/surveys/states`;

export const SURVEY_LIST_QUERY_KEY = 'surveysList';
export const SURVEY_LIST_QUERY_URL = `${BASE_API_URL}/surveys`;

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
    id: 'supervisor',
    name: 'Supervisor',
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
  StateIds: [],
  AssigneeIds: [],
  SupervisorIds: [],
  FormNameSortOrder: 1,
  AssigneeSortOrder: null,
  Take: 30,
  Search: '',
};

export const DEFAULT_SORTING_PARAMS = {
  columnId: 'formName',
  type: 'up',
};
