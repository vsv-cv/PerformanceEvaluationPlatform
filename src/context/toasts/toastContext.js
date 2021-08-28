import React, { useState } from 'react';
 const [toastsList, setToastsList] = useState([
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
     time: '3000',
     type: 'success',
   },
   {
     id: 5,
     icon: 'fa fa-user fa-lg fa-fw',
     message: '5555',
     time: '5000',
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
 ]);

export const ToastContext = () => {

  const deleteToastOnSetTime = time => {
    setToastsList(prevState => [...prevState.filter(t => t.time !== time)]);
  };
  const deleteToastOnClick = id => {
    setToastsList(prevState => [...prevState.filter(t => t.id !== id)]);
  };
  return {
    toastsList: toastsList,
    deleteToastOnClick: deleteToastOnClick,
    deleteToastOnSetTime: deleteToastOnSetTime,
  };
}

