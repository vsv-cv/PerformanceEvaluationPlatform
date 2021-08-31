import React from 'react'
import PropTypes from 'prop-types'

import styles from './errors.module.scss'

export const Errors = ({errors}) => {
    return (
        <div className={styles.errors}>
            {errors.map(e => {
                return (
                    <div key={e.id} className={styles.error} >
                        {e.icon && <i className={e.icon} />}
                        {e.message}</div>
                )
            })} 
        </div>
    )
}

Errors.propTypes = {
    errors: PropTypes.array.isRequired,
}


