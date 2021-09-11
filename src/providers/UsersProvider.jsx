import React from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';
import { BASE_API_URL } from '../api';

export const UsersContext = React.createContext();

export const UsersProvider = ({ children }) => {
  const { data } = useQuery(
    'users',
    async () => await (await axios.get(`${BASE_API_URL}/Users?Take=999`)).data
  );

  const dropdownOptions = data?.map(item => ({
    key: item.id,
    text: `${item.firstName} ${item.lastName}`,
  }));
  return (
    <UsersContext.Provider value={dropdownOptions}>
      {children}
    </UsersContext.Provider>
  );
};
