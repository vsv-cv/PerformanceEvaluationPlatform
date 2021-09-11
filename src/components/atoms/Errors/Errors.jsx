import React from 'react';
import PropTypes from 'prop-types';

import classes from './errors.module.scss';

export const Errors = ({ errors }) => {
  return (
    <div className={classes.errors}>
      {errors.map(e => {
        return (
          <div key={e.id} className={classes.error}>
            {e.icon && <i className={e.icon} />}
            {e.message}
          </div>
        );
      })}
    </div>
  );
};

Errors.propTypes = {
  errors: PropTypes.array.isRequired,
};
