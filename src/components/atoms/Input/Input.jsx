import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

import styles from './input.module.scss'

export const Input = ({
  icon,
  type,
  name,
  value,
  label,
  disabled,
  handleChange
}) => {

  const containerClasses = classNames([styles.conteiner], {
    [styles.disabled]: disabled,
  })

  const labelClasses = classNames([styles.formInput__label], {
    [styles.formInput__label_up]: value.length > 0,
  })

  return (
    <div className={containerClasses}>
      {icon &&
        <div className={styles.icon}>
          <i className={icon} />
        </div>}
      <div className={styles.formInput}>
        <input
          type={type}
          name={name}
          value={value}
          disabled={disabled}
          onChange={handleChange}
          className={styles.formInput__input}
        />
        {label && <label className={labelClasses}>{label}</label>}
      </div>
    </div>
  )
}

Input.propTypes = {
  icon: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  disabled: PropTypes.bool,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
}

Input.defaultProps = {
  icon: '',
  name: '',
  type: 'text',
  disabled: false,
}


