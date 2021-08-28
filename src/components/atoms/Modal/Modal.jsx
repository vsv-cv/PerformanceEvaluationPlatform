import React from 'react';
import ReactModal from 'react-modal';
import classes from './styles/index.module.scss';

ReactModal.setAppElement('#root');

export const Modal = props => {
  const overlayClassNames = {
    base: classes.modalOverlay,
    afterOpen: classes.modalOverlay_open,
    beforeClose: classes.modalOverlay_closed,
  };

  return (
    <ReactModal
      overlayClassName={overlayClassNames}
      className={classes.modalContent}
      closeTimeoutMS={200}
      {...props}
    >
      {props.children}
    </ReactModal>
  );
};
