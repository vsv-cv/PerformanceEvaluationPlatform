import React from 'react'
import PropTypes from 'prop-types';

import styles from './buttonTaost.module.scss'

export const ButtonTaost = ({
    handleClick,
}) => {
    return (
        <>
            <button
                className={styles.btnClose}
                onClick={handleClick}
            >
                x
            </button>
        </>
    );

}

ButtonTaost.propTypes = {
    handleClick: PropTypes.func.isRequired
}


