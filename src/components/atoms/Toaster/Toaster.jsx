import React from 'react';
import PropTypes from 'prop-types';

import classes from './toaster.module.scss';
import { Toast } from './Toast/Toast';

export const Toaster = ({
  toasts,
  deleteToastOnClick,
  deleteToastOnSetTime,
}) => {
  return (
    <div className={classes.content}>
      {toasts?.map(toast => (
        <Toast
          toast={toast}
          key={toast.id}
          deleteToastOnClick={deleteToastOnClick}
          deleteToastOnSetTime={deleteToastOnSetTime}
        />
      ))}
    </div>
  );
};

Toaster.propTypes = {
  toasts: PropTypes.array.isRequired,
};
