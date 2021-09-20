import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router';
import { HeaderItem } from '../HeaderItem';
import { NAV_ITEMS } from './const.js';

export const HeaderNavItems = () => {
  const { pathname } = useLocation();

  return NAV_ITEMS.map(item => (
    <HeaderItem key={item.title} active={pathname === item.link ? 1 : 0}>
      <Link to={item.link}>{item.title}</Link>
    </HeaderItem>
  ));
};
