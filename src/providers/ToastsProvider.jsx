import React, { useState } from 'react';

export const ToastsContext = React.createContext();

let errors = [
    {
        id: 1,
        icon: 'fa fa-user fa-lg fa-fw',
        message: '11111',
        time: '1000',
        type: 'error',
    },
    {
        id: 3,
        icon: 'fa fa-user fa-lg fa-fw',
        message: '3333',
        time: '2000',
        type: 'success',
    },
    {
        id: 5,
        icon: 'fa fa-user fa-lg fa-fw',
        message: '5555',
        time: '1000',
        type: 'warning',
    },
    {
        id: 7,
        icon: 'fa fa-user fa-lg fa-fw',
        message: '11111',
        time: '1000',
        type: 'error',
    },
    {
        id: 8,
        icon: 'fa fa-user fa-lg fa-fw',
        message: '111111',
        handleClick: true,
        type: 'success',
    },
]

export const ToastsProvider = ({ children }) => {
    const [toastsList, setToastsList] = useState(errors);

    const addToast = (newToast) => {
    // let newToast = {
    //         id: 9,
    //         message: '9999',
    //         time: '5000',
    //         type: 'error',
    //     }
        setToastsList(prevState => [...prevState, newToast ]);
    }

    const deleteToastOnClick = id => {
        setToastsList(prevState => [...prevState.filter(t => t.id !== id)]);
    };

    const deleteToastOnSetTime = time => {
        setToastsList(prevState => [...prevState.filter(t => t.time !== time)]);
    };

    return (
        <ToastsContext.Provider value={{
            addToast,
            toastsList,
            deleteToastOnClick,
            deleteToastOnSetTime
        }}>
            {children}
        </ToastsContext.Provider>
    );
};