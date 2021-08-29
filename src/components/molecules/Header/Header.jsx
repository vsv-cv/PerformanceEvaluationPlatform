import React from 'react';
import LoginTools from './LoginTools/LoginTools';
import { Navbar } from './Navbar/Navbar';
import styles from './styles/index.module.scss';
import mainLogo from '../../../icons/mainLogo.png';
import closeImg from '../../../icons/close.svg';
import menuImg from '../../../icons/menu.svg';
import HeaderImg from './HeaderImg/HeaderImg';
import { useState, useEffect } from 'react';
import classNames from 'classnames';
import { useHistory } from 'react-router-dom';

export const Header = () => {
  const [menuIsClose, setMenuIsClose] = useState(true);
  const navStyles = classNames(styles.nav, menuIsClose && styles.nav_close);
  const icon = menuIsClose ? menuImg : closeImg;
  const history = useHistory();

  useEffect(() => {
    return history.listen(() => {
      setMenuIsClose(true);
    });
  }, [history]); //eslint-disable-line

  return (
    <div className={styles.header}>
      <HeaderImg
        classes={styles.burger}
        image={icon}
        style={{ display: 'none' }}
        onClick={() => setMenuIsClose(!menuIsClose)}
      />
      <HeaderImg
        classes={styles.logo}
        link="/main"
        image={mainLogo}
        style={{
          background: '#ffe65a',
          padding: '5px',
          boxSizing: 'border-box',
        }}
      />
      <Navbar classes={navStyles} />
      <LoginTools classes={styles.profile} />
    </div>
  );
};
