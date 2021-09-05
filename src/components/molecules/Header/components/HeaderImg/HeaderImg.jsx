import classNames from 'classnames';
import React from 'react';
import styles from './styles/index.module.scss';
import { TYPES } from './const';
import { Link } from 'react-router-dom';

export default function HeaderImg({
  link,
  image,
  type,
  style,
  classes,
  onClick,
}) {
  const linkStyle = classNames(
    styles.img_container,
    type === TYPES.circle && styles.img_circle,
    classes
  );
  return !onClick ? (
    <Link className={linkStyle} to={link} style={style}>
      <img src={image} alt="" />
    </Link>
  ) : (
    <div className={linkStyle} style={style} onClick={onClick}>
      <img src={image} alt="" />
    </div>
  );
}
