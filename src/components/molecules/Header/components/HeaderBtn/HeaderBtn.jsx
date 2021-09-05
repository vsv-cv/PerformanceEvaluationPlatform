import React from 'react';
import styles from './styles/index.module.scss';
import classNames from 'classnames';
import { useHistory } from 'react-router-dom';

export default function HeaderBtn({ link, children, active }) {
  const classes = classNames(
    styles.header__btn,
    active && styles.header__btn_active
  );
  const { push } = useHistory();

  const handlerClick = () => {
    push(link);
  };

  return (
    <div to={link} className={classes} onClickCapture={handlerClick}>
      {children}
    </div>
  );
}
