import React, { useEffect } from 'react'
import classes from './styles/index.module.scss'
import { getDropdownContentStyle, removeValueFromArray } from './utils'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export const DropdownContent = (
  {
    callingComponent,
    handleClose,
    options,
    keys,
    onSelect,
    multiselect
  }
) => {
  const style = getDropdownContentStyle(callingComponent);

  const manageMultiselectKeys = (prev, key) => {
    return prev.includes(key)
      ? removeValueFromArray(key, prev)
      : [...prev, key].sort();
  }

  const handleClickOnOption = (e, key) => {
    e.stopPropagation();

    if (multiselect) {
      onSelect(prev => manageMultiselectKeys(prev, key))
    } else {
      onSelect([key]);
      handleClose();
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClose);
    return () => {
      document.removeEventListener('click', handleClose);
    }
  }, [handleClose])

  return (
    <div
      className={classes.content}
      style={style}
      onClick={() => handleClose()}
    >
      <ul className={classes.content__list}>
        {options.map(option => 
        {
          return (
          <li
            key={option.key}
            className={classNames(
              classes.content__option,{
                [classes.content__option_selected]: keys.includes(option.key)
              })}
            onClick={e => handleClickOnOption(e, option.key)}
          >
            {option.text}
          </li>
        )})}
      </ul>
    </div>
  )
}


DropdownContent.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      text: PropTypes.string,
    })
  ).isRequired,
  keys: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])).isRequired,
  onSelect: PropTypes.func.isRequired,
  multiselect: PropTypes.bool,
  handleClose: PropTypes.func.isRequired,
  callingComponent: PropTypes.instanceOf(Element).isRequired
}