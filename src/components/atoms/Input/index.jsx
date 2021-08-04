import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

import classes from './input.scss'

const Input = ({ icon, type, name, value, label, disabled, required, handleChange }) => {
  const iconElement = (
    <div className={classes.icon}>
      <i className={icon} />
    </div>
  )

  const labelClasses = classNames([classes.formInput__label], {
    [classes.formInput__label_up]: value.length > 0,
  })

  const containerClasses = classNames([classes.conteiner], {
    [classes.disabled]: disabled,
  })

  return (
    <div className={containerClasses}>
      {icon && iconElement}
      <div className={classes.formInput}>
        <input
          type={type}
          name={name}
          value={value}
          disabled={disabled}
          required={required}
          onChange={handleChange}
          className={classes.formInput__input}
        />
        {label && <label className={labelClasses}>{label}</label>}
      </div>
    </div>
  )
}

Input.propTypes = {
  icon: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  handleChange: PropTypes.func.isRequired,
}

Input.defaultProps = {
  icon: '',
  type: 'button',
  name: '',
  value: PropTypes.string.isRequired,
  label: '',
  disabled: false,
  required: true,
}

export default Input
