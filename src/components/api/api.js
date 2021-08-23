import * as axios from "axios";

const instance = axios.create({
  baseURL: "https://pepwebappqa.azurewebsites.net/",
});

export const UsersApi = {
  getUsers(fetchParams, roleIds, stateIds) {
    //debugger;
    return instance
      .get(`Users`, {
        params: {
          ...fetchParams,
          RoleIds: roleIds,
        },
      })
      .then((response) => {
        return response;
      });
  },
};