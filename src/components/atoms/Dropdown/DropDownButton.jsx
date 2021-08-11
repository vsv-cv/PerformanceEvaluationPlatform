import React from 'react'
import classes from './styles/index.module.scss';
import classNames from 'classnames';
import { getSelectedOptionsTitle } from './utils';
import PropTypes from 'prop-types'

export const DropdownButton = React.forwardRef((
  {
    isOpen,
    title,
    disabled,
    handleDropdownButtonClick,
    options,
    keys,
  }, ref
) => {
  const { dropdownButtonRef } = ref;
  const selectedOptionsTitle = getSelectedOptionsTitle({ options, keys });
  return (
    <button
      type="button"
      disabled={disabled}
      ref={dropdownButtonRef}
      onClick={handleDropdownButtonClick}
      className={classes.dropdown}
    >
      <div className={classNames(classes.dropdown__title, {
        [classes.dropdown__title_selected]: keys.length !== 0
      })}>
        {selectedOptionsTitle.length ? selectedOptionsTitle : title}
      </div>

      <svg
        className={classNames(classes.arrowIcon, {
          [classes.arrowIcon_open]: isOpen
        })}
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M7 10l5 5 5-5z" />
      </svg>


      <div className={classes.dropdown__underlineWrapper}>
        <span className={classes.dropdown__underline} />
      </div>
    </button>
  )
})

DropdownButton.propTypes = {
  title: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      text: PropTypes.string,
    })
  ).isRequired,
  keys: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])).isRequired,
  disabled: PropTypes.bool.isRequired,
  handleDropdownButtonClick: PropTypes.func.isRequired
}