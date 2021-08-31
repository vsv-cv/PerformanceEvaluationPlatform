import React, { useEffect, useState } from 'react';
import HeaderBtn from '../HeaderBtn/HeaderBtn';
import { navItems } from './const';
import styles from './styles/index.module.scss';
import { useHistory } from 'react-router-dom';
import classNames from 'classnames';

export const Navbar = ({ classes }) => {
  const { location } = useHistory();
  const history = useHistory();
  const [currentPath, setCurrentPath] = useState(location.pathname); //eslint-disable-line
  const navStyles = classNames(styles.navbar, classes);

  useEffect(() => {
    return history.listen(() => {
      setCurrentPath(history.location.pathname);
    });
  }, [history]); //eslint-disable-line

  return (
    <nav className={navStyles}>
      {navItems?.map(navItem => {
        const isActive = location.pathname === navItem.link;
        return (
          <HeaderBtn key={navItem.title} link={navItem.link} active={isActive}>
            {navItem.title}
          </HeaderBtn>
        );
      })}
    </nav>
  );
};
