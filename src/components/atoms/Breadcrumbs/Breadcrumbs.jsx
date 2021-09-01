import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import classes from './styles/index.module.scss';

export const Breadcrumbs = ({ items }) => {
  return (
    <ul className={classes.container}>
      {items?.map((item, index) => {
        const itemClassNames = classNames(classes.item, classes.item_canGrow, {
          [classes.item_selected]: item.isSelected,
        });

        return (
          <>
            <li className={itemClassNames}>{item.text}</li>
            {items.length !== index + 1 && (
              <li className={classes.item}>{'>'}</li>
            )}
          </>
        );
      })}
    </ul>
  );
};

Breadcrumbs.propTypes = {
  items: PropTypes.shape({
    text: PropTypes.string,
    isSelected: PropTypes.bool,
  }),
};
