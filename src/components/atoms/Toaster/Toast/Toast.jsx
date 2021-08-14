import React, { useEffect } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

import styles from './toast.module.scss'
import {ButtonTaost} from '../ButtonTaost';

export const Toast = ({ toast, deleteToast}) => {
    const {
        id,
        time,
        type,
        message,
        className,
        handleClick,
    } = toast

    useEffect(() => {
        const timer = time && setTimeout(() => deleteToast(id), time);
        return () => clearTimeout(timer);
    }, [deleteToast, id, time]);

    const handelClose = () => {
        deleteToast(id)
    }

    const classProps = classNames(styles.notification, styles[type], className)

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    return (
        <>
            <div className={classProps} >
                <div>
                    <div className={styles.notification__title} >{capitalizeFirstLetter(type)}</div>
                    <div className={styles.notification__message}>{message}</div>
                </div>
                {handleClick && <ButtonTaost handleClick={handelClose}></ButtonTaost>}
            </div>
        </>
    )
}


Toast.propTypes = {
    toasts: PropTypes.shape({
        time: PropTypes.string,
        handleClick: PropTypes.bool,
        id: PropTypes.number.isRequired,
        type: PropTypes.string.isRequired,
        message: PropTypes.string.isRequired,
    }),
}

Toast.defaultProps = {
    time: '',
    handleClick: false,
}