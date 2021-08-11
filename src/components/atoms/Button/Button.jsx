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
  SUCCESS:'success',
  DEFAULT: 'default',
  ROUNDED: 'rounded',
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
}

export const ButtonSize = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
}

const Button = ({
  icon,
  type,
  size,
  theme,
  width,
  onClick,
  children,
  disabled,
  iconType,
  className,
}) => {

  const sizeType = {
    'small': iconType ? 'circleSmall' : 'small',
    'medium': iconType ? 'circleMedium' : 'medium',
    'large': iconType ? 'circleLarge' : 'large',
  }

  const classProps = classNames(styles.button, styles[theme], styles[sizeType[size]], styles[width], className)

  return (
    <>
      {!iconType ?
        <button type={type} onClick={onClick} disabled={disabled} className={classProps}>
          {icon && <i className={icon} />}
          {children}
        </button>
        :
        <button type={type} onClick={onClick} disabled={disabled} className={classProps}>
          {icon && <i className={icon} />}
          {/* <div className={styles.hideText}>{children}</div> */}
        </button>
      }
    </>
  )
}

Button.propTypes = {
  icon: PropTypes.string,
  type: PropTypes.string,
  size: PropTypes.string,
  width: PropTypes.string,
  theme: PropTypes.string,
  iconType: PropTypes.bool,
  disabled: PropTypes.bool,
  children: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
}

Button.defaultProps = {
  icon: '',
  width: '',
  children: '',
  className: '',
  iconType: false,
  disabled: false,
  onClick: () => {},
  size: ButtonSize.SMALL,
  type: ButtonType.BUTTON,
  theme: ButtonTheme.DEFAULT,
}

export { Button }
