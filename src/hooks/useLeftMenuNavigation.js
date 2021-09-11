import { useContext } from 'react';
import { LeftNavigationMenuContext } from '../providers/LeftMenuNavigationProvider';

export const useLeftNavigationMenu = () =>
  useContext(LeftNavigationMenuContext);
