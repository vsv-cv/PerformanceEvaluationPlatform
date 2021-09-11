import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import classes from './styles/index.module.scss';

export const Breadcrumbs = ({ items }) => {
  return (
    <ul className={classes.container}>
      {items?.map((item, index) => {
        const itemClasses = classNames(classes.item, classes.item_canGrow, {
          [classes.item_selected]: item.isSelected,
        });

        return (
          <React.Fragment key={item.text}>
            <li className={itemClasses}>{item.text}</li>
            {items.length !== index + 1 && (
              <li className={classes.item}>{'>'}</li>
            )}
          </React.Fragment>
        );
      })}
    </ul>
  );
};

Breadcrumbs.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      isSelected: PropTypes.bool,
    })
  ),
};
