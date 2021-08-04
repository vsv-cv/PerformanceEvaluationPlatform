import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

import styles from './iconButton.scss'

export const ButtonType = {
  BUTTON: 'button',
  RESET: 'reset',
  SUBMIT: 'submit',
}

export const ButtonTheme = {
  DEFAULT: 'default',
  ROUNDED: 'rounded',
}

export const ButtonSize = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
}

const IconButton = ({ icon, type, onClick, theme, size, className, disabled }) => {
  const iconChildren = <i className={icon} />

  const classProps = classNames(styles.button, styles[theme], styles[size], className)

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classProps}>
      {icon && iconChildren}
    </button>
  )
}

IconButton.propTypes = {
  icon: PropTypes.string,
  type: PropTypes.string,
  size: PropTypes.string,
  theme: PropTypes.string,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
}

IconButton.defaultProps = {
  icon: '',
  className: '',
  disabled: false,
  onClick: () => {},
  size: ButtonSize.MEDIUM,
  type: ButtonType.BUTTON,
  theme: ButtonTheme.DEFAULT,
}

export default IconButton
