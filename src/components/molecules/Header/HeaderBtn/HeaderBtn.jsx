import React from 'react';
import styles from './styles/index.module.scss';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

export default function HeaderBtn({ link, children, active }) {
  const classes = classNames(
    styles.header__btn,
    active && styles.header__btn_active
  );
  return (
    <Link to={link} className={classes}>
      {children}
    </Link>
  );
}
