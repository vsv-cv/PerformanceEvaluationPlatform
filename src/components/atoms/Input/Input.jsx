import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import classes from './input.module.scss';

export const Input = ({
  icon,
  type,
  name,
  value,
  label,
  disabled,
  handleChange,
}) => {
  const containerClasses = classNames([classes.conteiner], {
    [classes.disabled]: disabled,
  });

  const labelClasses = classNames([classes.formInput__label], {
    [classes.formInput__label_up]: value?.length > 0,
  });

  return (
    <div className={containerClasses}>
      {icon && (
        <div className={classes.icon}>
          <i className={icon} />
        </div>
      )}
      <div className={classes.formInput}>
        <input
          type={type}
          name={name}
          value={value}
          disabled={disabled}
          onChange={handleChange}
          className={classes.formInput__input}
        />
        {label && <label className={labelClasses}>{label}</label>}
      </div>
    </div>
  );
};

Input.propTypes = {
  icon: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  disabled: PropTypes.bool,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

Input.defaultProps = {
  icon: '',
  name: '',
  type: 'text',
  disabled: false,
};
