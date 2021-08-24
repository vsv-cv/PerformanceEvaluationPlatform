import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import classes from './checkbox.module.scss';

export const Checkbox = ({ label, checked = false, onChange, disabled }) => {
  return (
    <label
      className={classNames(classes.container, {
        [classes.container_disabled]: disabled,
      })}
    >
      {label}
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        disabled={disabled}
      />
      <span className={classes.checkmark} />
    </label>
  );
};

Checkbox.propTypes = {
  label: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};
