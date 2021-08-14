import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import styles from './toaster.module.scss'
import { Toast } from './Toast/Toast';

export const Toaster = ({ toasts }) => {
    
    const [toastsList, setToastsList] = useState(toasts)

    useEffect(() => {
        setToastsList(toasts)
    }, [toasts])

    const deleteToast = (id) => {
        setToastsList((prevState) => [...prevState.filter((t) => t.id !== id)])
    }

    return (
        <div className={styles.content} >
            {
                toastsList.map(toast =>
                    <Toast
                    toast={toast}
                    key={toast.id}
                    deleteToast={deleteToast}
            />)}
        </div>
    )
}


Toaster.propTypes = {
    toasts: PropTypes.array.isRequired,
}
