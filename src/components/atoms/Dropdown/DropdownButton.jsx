import React from 'react';
import classes from './styles/index.module.scss';
import classNames from 'classnames';
import { getSelectedOptionsTitle } from './utils';
import PropTypes, { string } from 'prop-types';

const DropdownButtonInner = (
  {
    label,
    isOpen,
    title,
    disabled,
    handleDropdownButtonClick,
    options,
    keys,
    hasSearch,
    searchValue,
    setSearchValue,
  },
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
      {hasSearch ? (
        <input
          disabled={disabled}
          placeholder={selectedOptionsTitle || title}
          className={classes.input}
          value={searchValue}
          onChange={e => setSearchValue(e.target.value)}
        />
      ) : (
        <div className={titleClasses}>
          {selectedOptionsTitle?.length ? selectedOptionsTitle : title}
        </div>
      )}

      <svg className={svgClasses} viewBox="0 0 24 24" aria-hidden="true">
        <path d="M7 10l5 5 5-5z" />
      </svg>

      <div className={classes.dropdown__underlineWrapper}>
        <span className={classes.dropdown__underline} />
      </div>
    </button>
  );
};

export const DropdownButton = React.forwardRef(DropdownButtonInner);

DropdownButton.propTypes = {
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
  hasSearch: PropTypes.bool,
  searchValue: string,
  setSearchValue: PropTypes.func,
};
