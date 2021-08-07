import React from 'react'
import classes from './styles/index.module.scss';
import classNames from 'classnames';
import { getSelectedOptionsTitle } from './utils';
import PropTypes from 'prop-types'

export const DropDownButton = React.forwardRef((
  {
    title,
    disabled,
    handleDropdownButtonClick,
    handleMouseEnter,
    handleMouseLeave,
    options,
    keys,
  }, ref
) => {
  const { dropdownButtonRef, underlineRef } = ref;
  const selectedOptionsTitle = getSelectedOptionsTitle({ options, keys });
  return (
    <button
      type="button"
      disabled={disabled}
      ref={dropdownButtonRef}
      onClick={handleDropdownButtonClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={classes.dropdown}
    >
      <div className={classNames(classes.dropdown__title, {
        [classes.dropdown__title_selected]: keys.length !== 0
      })}>
        {selectedOptionsTitle.length ? selectedOptionsTitle : title}
      </div>
      <div className={classes.dropdown__underlineWrapper}>
        <span ref={underlineRef} className={classes.dropdown__underline} />
      </div>
    </button>
  )
})