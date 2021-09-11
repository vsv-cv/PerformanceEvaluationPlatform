import React from 'react';
import ReactDOM from 'react-dom';
import { HeaderLeftNavigationMenu } from './HeaderLeftNavigationMenu';

export const HeaderLefNavigationMenuPortal = props => {
  const { portalContainer } = props;

  return ReactDOM.createPortal(
    <HeaderLeftNavigationMenu {...props} />,
    portalContainer
  );
};
