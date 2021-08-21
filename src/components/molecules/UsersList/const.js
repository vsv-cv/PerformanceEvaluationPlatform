import { BASE_API_URL } from "../../api/const";

export const ROLES_LIST_QUERY_KEY = "rolesList";
export const QUERY_URL = `${BASE_API_URL}/roles`;
export const LIST_COLUMNS = [
  {
    id: "Formatted",
    name: "Formatted",
    sort: true,
  },
  {
    id: "Email",
    name: "Email",
    sort: false,
  },
  {
    id: "Team Name",
    name: "Team Name",
    sort: false,
  },
  {
    id: "Role",
    name: "Role",
    sort: false,
  },
  {
    id: "Level",
    name: "Level",
    sort: false,
  },
  {
    id: "Previous PE date",
    name: "Previous PE date",
    sort: true,
  },
  {
    id: "Next PE date",
    name: "Next PE date",
    sort: true,
  },
  {
    id: "State",
    name: "State",
    sort: false,
  },
];