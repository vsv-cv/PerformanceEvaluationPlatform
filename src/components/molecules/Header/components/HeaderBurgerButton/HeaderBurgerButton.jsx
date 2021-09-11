import React from 'react';
import { BaseButton } from '../../../../atoms/BaseButton';
import { FlexGrid } from '../../../../atoms/FlexGrid';
import classes from './styles/index.module.scss';

export const HeaderBurgerButton = ({ isOpen, setIsOpen }) => {
  const toggleOpen = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <FlexGrid hrCenter className={classes.container}>
      <BaseButton onClick={toggleOpen}>
        {isOpen && <img src="/images/close.svg" alt="" />}
        {!isOpen && <img src="/images/menu.svg" alt="" />}
      </BaseButton>
    </FlexGrid>
  );
};
