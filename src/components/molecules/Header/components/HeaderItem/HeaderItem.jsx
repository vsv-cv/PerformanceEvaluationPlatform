import React from 'react';
import classNames from 'classnames';
import { BaseButton } from '../../../../atoms/BaseButton';
import classes from './styles/index.module.scss';

export const HeaderItem = props => {
  const { children, active } = props;
  const itemClasses = classNames(classes.headerItem, {
    [classes.headerItem_active]: active,
  });

  return (
    <BaseButton className={itemClasses} {...props}>
      {children}
    </BaseButton>
  );
};
