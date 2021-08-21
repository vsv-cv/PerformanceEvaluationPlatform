import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

import styles from './button.module.scss'

export const ButtonType = {
  RESET: 'reset',
  BUTTON: 'button',
  SUBMIT: 'submit',
}

export const ButtonTheme = {
  SUCCESS: 'success',
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
}

export const ButtonSize = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
  DEFAULT: 'default'
}

export const Button = ({
  icon,
  type,
  size,
  theme,
  onClick,
  children,
  disabled,
  iconType,
  fullwidth,
  className,
}) => {

  const sizeType = {
    'small': iconType ? 'circleSmall' : 'small',
    'medium': iconType ? 'circleMedium' : 'medium',
    'large': iconType ? 'circleLarge' : 'large',
  }

  const classProps = classNames(styles.button, styles[theme], styles[sizeType[size]], {
    [styles.fullwidth]: fullwidth
  }, className)

  return (
    <>
      <button title={iconType ? children : 'button'} type={type} onClick={onClick} disabled={disabled} className={classProps}>
        {icon && <i className={icon} />}
        {!iconType && children}
      </button>
    </>
  )
}

Button.propTypes = {
  icon: PropTypes.string,
  type: PropTypes.string,
  size: PropTypes.string,
  theme: PropTypes.string,
  iconType: PropTypes.bool,
  disabled: PropTypes.bool,
  fullwidth: PropTypes.bool,
  children: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
}

Button.defaultProps = {
  icon: '',
  children: '',
  className: '',
  iconType: false,
  disabled: false,
  fullwidth: false,
  onClick: () => { },
  size: ButtonSize.SMALL,
  type: ButtonType.BUTTON,
  theme: ButtonTheme.PRIMARY,
}


