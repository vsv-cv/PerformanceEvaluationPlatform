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
    setKeys,
    multiselect
  }
) => {
  const style = getDropdownContentStyle(callingComponent);

  const handleClickOnBackground = () => {
    handleClose();
  }

  const handleClickOnOption = e => {
    e.stopPropagation();
    const key = e.target.dataset.key;

    if (multiselect) {
      setKeys(prev => {
        if (prev.includes(key)) {
          return removeValueFromArray(key, prev);
        } else {
          return [...prev, key].sort();
        }
      })
      return;
    }

    setKeys([key]);
    handleClose();
  }

  useEffect(() => {
    document.addEventListener('click', handleClose);
    return () => {
      document.removeEventListener('click', handleClose);
    }
  }, [])

  return (
    <div
      className={classes.content}
      style={style}
      onClick={handleClickOnBackground}
    >
      <ul className={classes.content__list}>
        {options.map(option => 
        {
          return (
          <li
            key={option.key}
            data-key={option.key}
            className={classNames(
              classes.content__option,{
                [classes.content__option_selected]: keys.includes(option.key)
              })}
            onClick={handleClickOnOption}
          >
            {option.text}
          </li>
        )})}
      </ul>
    </div>
  )
}