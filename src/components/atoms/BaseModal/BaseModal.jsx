import classNames from 'classnames';
import React from 'react';
import ReactModal from 'react-modal';
import classes from './styles/index.module.scss';

ReactModal.setAppElement('#root');

export const BaseModal = props => {
  const { size } = props;

  const overlayClassNames = {
    base: classes.modalOverlay,
    afterOpen: classes.modalOverlay_open,
    beforeClose: classes.modalOverlay_closed,
  };

  const modalContentClassNames = classNames(classes.modalContent, {
    [classes.modalContent_tiny]: size === 'tiny',
    [classes.modalContent_small]: size === 'small',
    [classes.modalContent_medium]: size === 'medium',
    [classes.modalContent_large]: size === 'large',
    [classes.modalContent_fullscreen]: size === 'fullscreen',
  });

  return (
    <ReactModal
      overlayClassName={overlayClassNames}
      className={modalContentClassNames}
      closeTimeoutMS={200}
      {...props}
    >
      {props.children}
    </ReactModal>
  );
};
