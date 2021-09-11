import React, { useEffect } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import classes from './toast.module.scss';
import { ButtonTaost } from '../ButtonTaost';

export const Toast = ({ toast, deleteToastOnClick, deleteToastOnSetTime }) => {
  const { id, time, type, message, className, handleClick } = toast;

  useEffect(() => {
    const timer = time && setTimeout(() => deleteToastOnSetTime(time), time);
    return () => clearTimeout(timer);
  }, [deleteToastOnSetTime, time]);

  const handelClose = () => {
    deleteToastOnClick(id);
  };

  const classProps = classNames(classes.notification, classes[type], className);

  const capitalizeFirstLetter = string => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <>
      <div className={classProps}>
        <div>
          <div className={classes.notification__title}>
            {capitalizeFirstLetter(type)}
          </div>
          <div className={classes.notification__message}>{message}</div>
        </div>
        {handleClick && <ButtonTaost handleClick={handelClose}></ButtonTaost>}
      </div>
    </>
  );
};

Toast.propTypes = {
  toasts: PropTypes.shape({
    time: PropTypes.string,
    handleClick: PropTypes.bool,
    id: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
  }),
};

Toast.defaultProps = {
  time: '',
  handleClick: false,
};
