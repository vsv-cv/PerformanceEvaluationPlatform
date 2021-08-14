import React from 'react'
import PropTypes from 'prop-types'
import classes from './checkbox.module.scss'

const Checkbox = (
  {
    label,
    checked,
    onChange,
    disabled,
  }
) => {
  return (
    <label
      className={classes.container}
      disabled={disabled}
    >
      {label}
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
      />
      <span className={classes.checkmark} />
    </label>
  )
}

Checkbox.propTypes = {
  label: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool
}

export default Checkbox
