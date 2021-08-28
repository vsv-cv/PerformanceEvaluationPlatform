import { useContext } from 'react';
import { UsersContext } from '../providers/UsersProvider';

export const useUsersContext = () => useContext(UsersContext);
