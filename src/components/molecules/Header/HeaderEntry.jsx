import React from 'react';
import ReactDOM from 'react-dom';
import { Header } from './Header';

export const HeaderEntry = () => {
  return ReactDOM.createPortal(<Header />, document.getElementById('header'));
};
