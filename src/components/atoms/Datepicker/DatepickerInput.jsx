import classNames from 'classnames';
import React from 'react';
import classes from './styles/index.module.scss';

export const DatepickerInput = React.forwardRef((props, ref) => {
  const { className, disabled } = props;
  const inputClassnames = classNames(classes.input, className);

  return (
    <div ref={ref} className={classes.inputWrapper} disabled={disabled}>
      <svg
        className={classes.calendarSvgIcon}
        viewBox="0 0 24 24"
        width="24px"
        height="24px"
      >
        <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"></path>
      </svg>

      <input {...props} ref={ref} className={inputClassnames} />

      <div className={classes.underlineWrapper}>
        <span className={classes.underline} />
      </div>
    </div>
  );
});
