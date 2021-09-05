import React from 'react';
import { Navbar } from './Navbar';
import ReactDOM from 'react-dom';

export const VerticalNavbarPortal = ({ classes }) => {
  return ReactDOM.createPortal(
    <Navbar classes={classes} />,
    document.querySelector('.navbar-portal')
  );
};
