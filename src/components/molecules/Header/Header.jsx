import React from 'react';
import LoginTools from './components/LoginTools/LoginTools';
import { Navbar, VerticalNavbarPortal } from './components/Navbar';
import styles from './styles/index.module.scss';
import mainLogo from '../../../icons/mainLogo.png';
import closeImg from '../../../icons/close.svg';
import menuImg from '../../../icons/menu.svg';
import HeaderImg from './components/HeaderImg/HeaderImg';
import { useState, useEffect } from 'react';
import classNames from 'classnames';
import { useHistory } from 'react-router-dom';
import { WIDTH_BREAKPOINT } from './const';

export const Header = () => {
  const history = useHistory();
  const [isMenuClosed, setIsMenuClosed] = useState(true);
  const [showTopBarNav, setShowTopBarNav] = useState();
  const [canAnimateMenu, setCanAnimateMenu] = useState(false);
  const [closeSetTimeout, setCloseSetTimeout] = useState();
  const navStyles = classNames(styles.nav, {
    [styles.nav_close]: !canAnimateMenu,
  });
  const icon = isMenuClosed ? menuImg : closeImg;

  useEffect(() => {
    return history.listen(() => {
      handleMenuClose();
    });
  }, [history]); //eslint-disable-line

  useEffect(() => {
    setShowTopBarNav(window.innerWidth > WIDTH_BREAKPOINT);
    window.addEventListener('resize', () => {
      setShowTopBarNav(window.innerWidth > WIDTH_BREAKPOINT);
    });
  }, []); //eslint-disable-line

  const createPortalContainer = () => {
    if (document.querySelector('.navbar-portal')) {
      return;
    }

    const portalContainer = document.createElement('div');
    portalContainer.className = 'navbar-portal';
    portalContainer.addEventListener('click', handleMenuClose);

    document.body.appendChild(portalContainer);
  };

  const handleClickOnBurgerButton = () => {
    isMenuClosed && !canAnimateMenu && handleMenuOpen();
    !isMenuClosed && canAnimateMenu && handleMenuClose();

    if (!isMenuClosed && !canAnimateMenu) {
      clearTimeout(closeSetTimeout);
      handleMenuOpen();
    }
  };

  const handleMenuOpen = () => {
    setIsMenuClosed(false);
    createPortalContainer();
    setTimeout(() => {
      setCanAnimateMenu(true);
    });
  };

  const handleMenuClose = () => {
    setCanAnimateMenu(false);
    const close = setTimeout(() => {
      document.querySelector('.navbar-portal')?.remove();
      setIsMenuClosed(true);
    }, 400);
    setCloseSetTimeout(close);
  };

  if (!isMenuClosed && window.innerWidth > WIDTH_BREAKPOINT) {
    document.querySelector('.navbar-portal')?.remove();
    setCanAnimateMenu(false);
    setIsMenuClosed(true);
  }

  return (
    <div className={styles.header}>
      <HeaderImg
        classes={styles.burger}
        image={icon}
        style={{ display: 'none' }}
        onClick={handleClickOnBurgerButton}
      />
      <HeaderImg
        classes={styles.logo}
        link="/main"
        image={mainLogo}
        style={{
          background: '#ffffff',
          padding: '5px',
          boxSizing: 'border-box',
          borderRadius: '3px',
        }}
      />
      {showTopBarNav && <Navbar classes={navStyles} />}
      {!isMenuClosed && <VerticalNavbarPortal classes={navStyles} />}
      <LoginTools classes={styles.profile} />
    </div>
  );
};
