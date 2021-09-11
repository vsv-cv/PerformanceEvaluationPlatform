import React from 'react';
import { HeaderNavItems } from '../HeaderNavItems/HeaderNavItems';
import classes from './styles/index.module.scss';

export const HeaderTopNavigation = () => {
  return (
    <div className={classes.topNavigation}>
      <HeaderNavItems />
    </div>
  );
};
