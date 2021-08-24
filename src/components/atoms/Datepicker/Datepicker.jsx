import React from 'react';
import DatePicker from 'react-datepicker';
import PropTypes from 'prop-types';
import { DatepickerInput } from './DatepickerInput';
import classes from './styles/index.module.scss';

export const Datepicker = props => {
  const { label, selected, onChange = () => {} } = props;

  return (
    <div className={classes.wrapper}>
      {label && <label className={classes.label}>{label}</label>}

      <DatePicker
        selected={selected}
        onChange={onChange}
        dateFormat="dd.MM.yyyy"
        customInput={<DatepickerInput />}
        {...props}
      />
    </div>
  );
};

Datepicker.propTypes = {
  label: PropTypes.string,
  selected: PropTypes.instanceOf(Date),
  onChange: PropTypes.func,
};
