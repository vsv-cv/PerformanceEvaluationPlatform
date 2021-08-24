import React from 'react';
import classes from './styles/index.module.scss';
import classNames from 'classnames';
import { getSelectedOptionsTitle } from './utils';
import PropTypes from 'prop-types';

const DropdownButtonInner = (
  { label, isOpen, title, disabled, handleDropdownButtonClick, options, keys },
  ref
) => {
  const { dropdownButtonRef } = ref;
  const selectedOptionsTitle = getSelectedOptionsTitle({ options, keys });
  const buttonClasses = classNames(classes.dropdown, {
    [classes.dropdown_disabled]: disabled,
    [classes.dropdown_withLabel]: label,
  });

  const titleClasses = classNames(classes.dropdown__title, {
    [classes.dropdown__title_selected]: keys?.length !== 0,
  });

  const svgClasses = classNames(classes.arrowIcon, {
    [classes.arrowIcon_open]: isOpen,
  });

  return (
    <button
      type="button"
      disabled={disabled}
      ref={dropdownButtonRef}
      onClick={handleDropdownButtonClick}
      className={buttonClasses}
    >
      <div className={titleClasses}>
        {selectedOptionsTitle?.length ? selectedOptionsTitle : title}
      </div>

      <svg className={svgClasses} viewBox="0 0 24 24" aria-hidden="true">
        <path d="M7 10l5 5 5-5z" />
      </svg>

      <div className={classes.dropdown__underlineWrapper}>
        <span className={classes.dropdown__underline} />
      </div>
    </button>
  );
};

DropdownButtonInner.propTypes = {
  title: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      text: PropTypes.string,
    })
  ),
  keys: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  ),
  disabled: PropTypes.bool,
  handleDropdownButtonClick: PropTypes.func.isRequired,
};

export const DropdownButton = React.forwardRef(DropdownButtonInner);
