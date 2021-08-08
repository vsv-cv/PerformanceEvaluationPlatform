import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

import styles from "./iconButton.module.scss";

export const IconType = {
  BUTTON: 'button',
  RESET: 'reset',
  SUBMIT: 'submit',
}

export const IconTheme = {
  DEFAULT: "default",
  ROUNDED: "rounded",
};

export const IconSize = {
  SMALL: "small",
  MEDIUM: "medium",
  LARGE: "large",
};

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
  icon: "",
  className: "",
  disabled: false,
  onClick: () => {},
  size: IconSize.MEDIUM,
  type: IconType.BUTTON,
  theme: IconTheme.DEFAULT,
};

export  { IconButton }
