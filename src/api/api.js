import qs from 'qs';
import * as axios from 'axios';
import { filterEmptyValues } from '../utils';

const instance = axios.create({
  baseURL: 'https://pepwebappqa.azurewebsites.net/',
});

export const UsersApi = {
  getUsers(fetchParams) {
    return instance
      .get(`Users`, {
        params: {
          ...fetchParams,
        },
        paramsSerializer: params =>
          qs.stringify(filterEmptyValues(params), { indices: false }),
      })
      .then(response => {
        return response.data;
      });
  },
};
