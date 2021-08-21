import { BASE_API_URL } from "../../api/const";

export const ROLES_LIST_QUERY_KEY = 'surveysList';
export const QUERY_URL = `${BASE_API_URL}/surveys`;
export const LIST_COLUMNS = [
  {
    id: 'formName',
    name: 'Form Name',
    sort: true
  },
  {
    id: 'assignee',
    name: 'Assignee',
    sort: true
  },
  {
    id: 'supervisor',
    name: 'Supervisor',
    sort: false
  },
  {
    id: 'appointmentDate',
    name: 'Appointment date',
    sort: false
  },
  {
    id: 'state',
    name: 'State',
    sort: false
  },
];

export const DEFAULT_FETCH_PARAMS = {
  AppointmentDateFrom: '',
  AppointmentDateTo: '',
  StateIds: [],
  AssigneeIds: [],
  SupervisorIds: [],
  FormNameSortOrder: 1,
  AssigneeSortOrder: 1,
  Take: 20,
  Search: '',
}