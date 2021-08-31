import React from 'react';
import styles from './styles/index.module.scss';

export default function MainContentWrapper({ children }) {
  return <div className={styles.wrapper}>{children}</div>;
}
