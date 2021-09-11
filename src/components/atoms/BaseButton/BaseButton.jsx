import React from 'react';
import classNames from 'classnames';
import classes from './styles/index.module.scss';

export const BaseButton = ({ children, className, onClick, type }) => {
  const buttonClasses = classNames(classes.baseButton, className);

  return (
    <button type={type} onClick={onClick} className={buttonClasses}>
      {children}
    </button>
  );
};
