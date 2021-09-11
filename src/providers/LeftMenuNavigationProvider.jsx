import React, { useState } from 'react';
import { LeftNavigationMenu } from '../components/molecules/LeftNavigationMenu';

export const LeftNavigationMenuContext = React.createContext();

export const LeftMenuNavigationProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <LeftNavigationMenuContext.Provider value={[isOpen, setIsOpen]}>
      {children}
      <LeftNavigationMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    </LeftNavigationMenuContext.Provider>
  );
};
