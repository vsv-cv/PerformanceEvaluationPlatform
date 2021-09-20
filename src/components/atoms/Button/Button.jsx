import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { BaseButton } from '../BaseButton';
import { ButtonType, ButtonTheme, ButtonSize } from './const';
import classes from './styles/index.module.scss';

export const Button = ({
  icon,
  type,
  size,
  theme,
  onClick,
  children,
  disabled,
  iconOnly,
  fullwidth,
  className,
}) => {
  const sizeType = {
    small: iconOnly ? 'circleSmall' : 'small',
    medium: iconOnly ? 'circleMedium' : 'medium',
    large: iconOnly ? 'circleLarge' : 'large',
  };

  const buttonClasses = classNames(
    classes.button,
    classes[theme],
    classes[sizeType[size]],
    {
      [classes.fullwidth]: fullwidth,
    },
    className
  );

  return (
    <>
      <BaseButton
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={buttonClasses}
      >
        {icon && <i className={icon} />}
        {!iconOnly && children}
      </BaseButton>
    </>
  );
};

Button.propTypes = {
  icon: PropTypes.string,
  type: PropTypes.string,
  size: PropTypes.string,
  theme: PropTypes.string,
  iconOnly: PropTypes.bool,
  disabled: PropTypes.bool,
  fullwidth: PropTypes.bool,
  children: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  icon: '',
  children: '',
  className: '',
  iconOnly: false,
  disabled: false,
  fullwidth: false,
  onClick: () => {},
  size: ButtonSize.SMALL,
  type: ButtonType.BUTTON,
  theme: ButtonTheme.PRIMARY,
};
