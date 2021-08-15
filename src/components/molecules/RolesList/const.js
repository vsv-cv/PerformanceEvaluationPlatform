export const FETCH_URL = 'https://pepwebappqa.azurewebsites.net/roles';
export const LIST_COLUMNS = [
  {
    id: 'title',
    name: 'Title',
    sort: true
  },
  {
    id: 'isPrimary',
    name: 'isPrimary',
    sort: true
  },
  {
    id: 'usersCount',
    name: 'User count',
    sort: true
  }
];

export const DEFAULT_FILTER_VALUES = {
  searchValue: '',
  isPrimaryOnly: false,
  countFrom: '1',
  countTo: '100'
}