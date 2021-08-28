import React from 'react';
import { Link } from 'react-router-dom';
import { navItems } from './const';
import classes from './styles/index.module.scss';

export const Navbar = () => {
  return (
    <nav className={classes.navbar}>
      {navItems?.map(navItem => (
        <Link key={navItem.title} to={navItem.link}>
          {navItem.title}
        </Link>
      ))}
    </nav>
  );
};
