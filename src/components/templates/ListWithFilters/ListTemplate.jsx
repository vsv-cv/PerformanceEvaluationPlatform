import React from 'react'
import PropTypes from 'prop-types'
import classes from './styles/index.module.scss'
import classNames from 'classnames'

export const ListTemplate = (
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
        <h1 className={classes.heading__title}>
          {title}
        </h1>
        {button && (
          <div className={classes.heading__button}>
            {button}
          </div>
        )}
      </div>

      <div className={classes.grid__list}>
        {list}
      </div>
      <div className={classNames(classes.grid__sidebar, classes.sidebar)}>
        {sidebar}
      </div>
      
    </div>
  )
}

ListTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  button: PropTypes.node, // React Component
  list: PropTypes.node.isRequired, // React Component
  sidebar: PropTypes.node.isRequired, // React Component
}
