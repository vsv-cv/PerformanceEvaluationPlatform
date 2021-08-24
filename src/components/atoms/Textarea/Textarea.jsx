import React from 'react';
import PropTypes from 'prop-types';
import classes from './textarea.module.scss';

export const Textarea = ({ value, handleChange, disabled }) => {
  return (
    <textarea
      className={classes.textarea}
      value={value}
      disabled={disabled}
      onChange={handleChange}
    />
  );
};

Textarea.propTypes = {
  value: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  handleChange: PropTypes.func.isRequired,
};
