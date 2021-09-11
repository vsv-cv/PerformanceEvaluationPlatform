import React from 'react';
import classes from './styles/index.module.scss';

export const HeaderLogo = () => {
  return (
    <div className={classes.logoWrapper}>
      <img src="/images/logo.png" alt="" />
    </div>
  );
};
