import React from 'react'
import styles from './radioGroup.module.scss'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export default function RadioGroup({
  label,
  value,
  items,
  onChange,
  disabled,
  className
}) {
  const labelClasses = classNames(styles.radioGroup__radioLabel, disabled && styles.radioGroup__label_disabled, className);
  return (
    <div className={styles.radioGroup}>
      <span className={styles.radioGroup__label}>{label}</span>
      <div className={styles.radioGroup__radios}>
        {items.map(radio => {
          const checked = radio.value === value ? true : false;
          return (
            <label key={radio.value} className={labelClasses}>
              <input className={styles.radioGroup__radio} type="radio" value={radio.value} checked={checked} disabled={disabled} onChange={(e) => onChange(e.target.value)} />
              <span className={styles.radioGroup__radioText}>
                {radio.label}
              </span>
            </label>
          );
        })}
      </div>
    </div>
  )
}

RadioGroup.propTypes = {
  label: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  items: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ])
  })),
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  name: PropTypes.string
}

RadioGroup.defaultProps = {
  label: '',
  value: '',
  items: [
    {
      label: 'First',
      value: 1
    },
    {
      label: 'Second',
      value: 2
    }
  ],
  onChange: () => {
    console.error("You must to add event to RadioGroup");
  },
  disabled: false,
  name: 'RadioGroup'
}