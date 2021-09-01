import React, { useState } from 'react';
import { Wizard } from './Wizard';
import { Input } from '../../atoms/Input';

export const WizardUsageExample = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeScreenId, setActiveScreenId] = useState('first');

  const screens = [
    {
      id: 'first',
      title: 'First screen',
      component: (
        <Input
          label="First label"
          value="First input"
          handleChange={() => {}}
        />
      ),
      handleClickOnNextStep: () => {
        setActiveScreenId('second');
      },
    },
    {
      id: 'second',
      title: 'Second screen',
      component: (
        <Input
          label="Second label"
          value="Second input"
          handleChange={() => {}}
        />
      ),
      handleClickOnNextStep: closeWizard => {
        closeWizard();
      },
    },
  ];

  const handleClick = () => {
    setIsOpen(true);
  };

  const onRequestClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button onClick={handleClick}>Open wizard</button>
      <Wizard
        size="medium"
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        screens={screens}
        activeScreenId={activeScreenId}
        allowNext={true}
      />
    </>
  );
};
