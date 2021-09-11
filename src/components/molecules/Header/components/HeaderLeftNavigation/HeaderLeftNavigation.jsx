import React, { useState } from 'react';
import { HeaderBurgerButton } from '../HeaderBurgerButton';
import { useCreatePortalContainer } from '../../../../../hooks/useCreatePortalContainer';
import { HeaderLefNavigationMenuPortal } from './HeaderLefNavigationMenuPortal';
import classes from './styles/index.module.scss';

export const HeaderLeftNavigation = () => {
  const portalContainer = useCreatePortalContainer(classes.portal);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <HeaderBurgerButton isOpen={isOpen} setIsOpen={setIsOpen} />
      {portalContainer && (
        <HeaderLefNavigationMenuPortal
          portalContainer={portalContainer}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      )}
    </>
  );
};
