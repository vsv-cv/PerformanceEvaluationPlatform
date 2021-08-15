import React from 'react'
import PropTypes from 'prop-types'
import classes from './styles/index.module.scss'
import classNames from 'classnames'

export const ListWithFilters = (
  {
    title,
    button,
    list,
    sidebar
  }
) => {
  return (
    <div className={classes.grid}>
      <div className={classNames(classes.grid__heading, classes.heading)}>
        <div className={classes.heading__title}>
          {title}
        </div>
        {button && (
          <div className={classes.heading__title}>
            {button}
          </div>
        )}
      </div>

      <div className={classes.grid__list}>
        {list}
      </div>
      <div className={classes.grid__sidebar}>
        {sidebar}
      </div>
      
    </div>
  )
}

ListWithFilters.propTypes = {
  title: PropTypes.string.isRequired,
  button: PropTypes.node, // React Component
  list: PropTypes.node.isRequired, // React Component
  sidebar: PropTypes.node.isRequired, // React Component
}
