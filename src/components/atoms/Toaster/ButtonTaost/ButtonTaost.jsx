import React from 'react';
import PropTypes from 'prop-types';

import classes from './buttonTaost.module.scss';

export const ButtonTaost = ({ handleClick }) => {
  return (
    <>
      <button className={classes.btnClose} onClick={handleClick}>
        x
      </button>
    </>
  );
};

ButtonTaost.propTypes = {
  handleClick: PropTypes.func.isRequired,
};
