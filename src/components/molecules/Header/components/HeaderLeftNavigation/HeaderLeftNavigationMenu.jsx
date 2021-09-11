import React, { useCallback, useEffect } from 'react';
import classNames from 'classnames';
import { useLocation } from 'react-router';
import { HeaderNavItems } from '../HeaderNavItems';
import classes from './styles/index.module.scss';

export const HeaderLeftNavigationMenu = ({ isOpen, setIsOpen }) => {
  const { pathname } = useLocation();

  const backgroundClasses = classNames(classes.background, {
    [classes.background_open]: isOpen,
  });
  const menuClasses = classNames(classes.menu, {
    [classes.menu_open]: isOpen,
  });

  const handleMenuClose = useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);

  useEffect(() => {
    handleMenuClose();
  }, [handleMenuClose, pathname]);

  return (
    <>
      <div className={backgroundClasses} onClick={handleMenuClose} />
      <div className={menuClasses}>
        <HeaderNavItems />
      </div>
    </>
  );
};
