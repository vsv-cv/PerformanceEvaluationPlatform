import React from 'react';
import classNames from 'classnames';
import classes from './styles/index.module.scss';

export const BaseButton = ({ children, className, onClick, ...props }) => {
  const buttonClasses = classNames(classes.baseButton, className);

  return (
    <button onClick={onClick} className={buttonClasses} {...props}>
      {children}
    </button>
  );
};
