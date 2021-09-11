import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { FlexGrid } from '../../atoms/FlexGrid';
import { HeaderLeftNavigation } from './components/HeaderLeftNavigation/HeaderLeftNavigation';
import { HeaderTopNavigation } from './components/HeaderTopNavigation';
import { HeaderUserSection } from './components/HeaderUserSection';
import {
  SHOW_TOP_NAV_WIDTH_BREAKPOINT,
  SHOW_LOGO_WIDTH_BREAKPOINT,
} from './const';
import { HeaderLogo } from './components/HeaderLogo';
import classes from './styles/index.module.scss';

const HeaderContent = () => {
  const [showTopNavigation, setShowTopNavigation] = useState(
    window.innerWidth > SHOW_TOP_NAV_WIDTH_BREAKPOINT
  );
  const [showLogo, setShowLogo] = useState(
    window.innerWidth > SHOW_LOGO_WIDTH_BREAKPOINT
  );

  useEffect(() => {
    return window.addEventListener('resize', () => {
      setShowTopNavigation(window.innerWidth > SHOW_TOP_NAV_WIDTH_BREAKPOINT);
      setShowLogo(window.innerWidth > SHOW_LOGO_WIDTH_BREAKPOINT);
    });
  }, []);

  return (
    <FlexGrid spaceBetween className={classes.headerWrapper}>
      <FlexGrid gap="1rem">
        {!showTopNavigation && <HeaderLeftNavigation />}
        {showLogo && <HeaderLogo />}
      </FlexGrid>
      {showTopNavigation && <HeaderTopNavigation />}
      <HeaderUserSection />
    </FlexGrid>
  );
};

export const Header = () => {
  return ReactDOM.createPortal(
    <HeaderContent />,
    document.getElementById('header')
  );
};
