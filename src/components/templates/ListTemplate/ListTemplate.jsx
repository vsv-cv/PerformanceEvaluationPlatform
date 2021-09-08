import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import classes from './styles/index.module.scss';
import classNames from 'classnames';

export const ListTemplate = ({ title, button, list, sidebar }) => {
  const [tableHeight, setTableHeight] = useState();
  const tableRef = useRef();
  const sidebarRef = useRef();

  useEffect(() => {
    setTableHeight(
      Math.max(
        window.innerHeight -
          tableRef.current.getBoundingClientRect().top -
          30 /* Custom margin */,
        sidebarRef.current.clientHeight
      )
    );
  }, []);

  return (
    <div className={classNames(classes.grid, classes.layout)}>
      <div className={classNames(classes.grid__heading, classes.heading)}>
        <h1 className={classes.heading__title}>{title}</h1>
        {button && <div className={classes.heading__button}>{button}</div>}
      </div>

      <div
        ref={tableRef}
        className={classes.grid__list}
        style={{ maxHeight: tableHeight }}
      >
        {list}
      </div>
      <div
        ref={sidebarRef}
        className={classNames(classes.grid__sidebar, classes.sidebar)}
      >
        {sidebar}
      </div>
    </div>
  );
};

ListTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  button: PropTypes.node, // React Component
  list: PropTypes.node.isRequired, // React Component
  sidebar: PropTypes.node.isRequired, // React Component
};
