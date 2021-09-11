import classNames from 'classnames';
import React from 'react';
import classes from './styles/index.module.scss';

export const FlexGrid = ({
  className,
  children,
  column,
  inline,
  spaceBetween,
  spaceAround,
  top,
  bottom,
  center,
  hrCenter,
  wrap,
  hrEnd,
  grow,
  style,
  gap,
}) => {
  const componentClasses = classNames(classes.flexGrid, className, {
    [classes.flexGrid_inline]: inline,
    [classes.flexGrid_spaceBetween]: spaceBetween,
    [classes.flexGrid_spaceAround]: spaceAround,
    [classes.flexGrid_top]: top,
    [classes.flexGrid_bottom]: bottom,
    [classes.flexGrid_center]: center,
    [classes.flexGrid_hrCenter]: hrCenter,
    [classes.flexGrid_wrap]: wrap,
    [classes.flexGrid_hrEnd]: hrEnd,
    [classes.flexGrid_column]: column,
    [classes.flexGrid_grow]: grow,
  });

  const componentStyles = {
    ...style,
    gap,
  };

  return (
    <div className={componentClasses} style={componentStyles}>
      {children}
    </div>
  );
};
