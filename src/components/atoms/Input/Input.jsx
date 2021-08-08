import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

import classes from './input.module.scss'

const Input = ({
    icon,
    type,
    name,
    value,
    label,
    disabled,
    required,
    handleChange
  }) => {
  const iconElement = (
    <div className={classes.icon}>
      <i className={icon} />
    </div>
  )

  const containerClasses = classNames([classes.conteiner], {
    [classes.disabled]: disabled,
  })

  const labelClasses = classNames([classes.formInput__label], {
    [classes.formInput__label_up]: value.length > 0,
  })
  
  // const formInputClasses = classNames([classes.formInput], 
  //   classes[width]
  // )

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
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
}

Input.defaultProps = {
  icon: '',
  name: '',
  label: '',
  type: 'button',
  required: true,
  disabled: false,
  value: PropTypes.string.isRequired,
}

export  { Input }
