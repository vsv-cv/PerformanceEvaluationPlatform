import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

import styles from './button.module.scss'

export const ButtonType = {
  BUTTON: 'button',
  RESET: 'reset',
  SUBMIT: 'submit',
}

export const ButtonTheme = {
  DEFAULT: 'default',
  ROUNDED: 'rounded',
}

export const ButtonForm = {
  CIRCLE: 'circle',
}

export const ButtonSize = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
}

const Button = ({ icon, type, onClick, children, theme, form, size, className, disabled }) => {
  const iconChildren = <i className={icon} />

  const classProps = classNames(styles.button, styles[theme], styles[size], styles[form], className)

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classProps}>
      {icon && iconChildren}
      {children}
    </button>
  )
}

Button.propTypes = {
  icon: PropTypes.string,
  type: PropTypes.string,
  form: PropTypes.string,
  size: PropTypes.string,
  theme: PropTypes.string,
  disabled: PropTypes.bool,
  children: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
}

Button.defaultProps = {
  icon: '',
  form: '',
  size: '',
  children: '',
  className: '',
  disabled: false,
  onClick: () => {},
  type: ButtonType.BUTTON,
  theme: ButtonTheme.DEFAULT,
}

export { Button }
