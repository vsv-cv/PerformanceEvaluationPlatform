import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import classes from './styles/index.module.scss';

export const RadioGroup = ({
  label,
  value,
  items,
  onChange,
  disabled,
  className,
}) => {
  const labelClasses = classNames(
    classes.radioGroup__radioLabel,
    disabled && classes.radioGroup__label_disabled,
    className
  );
  return (
    <div className={classes.radioGroup}>
      <span className={classes.radioGroup__label}>{label}</span>
      <div className={classes.radioGroup__radios}>
        {items.map(radio => {
          const checked = radio.value === value ? true : false;
          return (
            <label key={radio.value} className={labelClasses}>
              <input
                className={classes.radioGroup__radio}
                type="radio"
                value={radio.value}
                checked={checked}
                disabled={disabled}
                onChange={e => onChange(e.target.value)}
              />
              <span className={classes.radioGroup__radioText}>
                {radio.label}
              </span>
            </label>
          );
        })}
      </div>
    </div>
  );
};

RadioGroup.propTypes = {
  label: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    })
  ),
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  name: PropTypes.string,
};

RadioGroup.defaultProps = {
  label: '',
  value: '',
  items: [
    {
      label: 'First',
      value: 1,
    },
    {
      label: 'Second',
      value: 2,
    },
  ],
  onChange: () => {
    console.error('You must to add event to RadioGroup');
  },
  disabled: false,
  name: 'RadioGroup',
};
