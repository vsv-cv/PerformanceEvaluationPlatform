import { useRef, useEffect } from 'react';
import reactDom from 'react-dom';
import classes from './styles/index.module.scss';

const LeftNavigationMenuContent = ({ setIsOpen }) => {
  return (
    <>
      <div className={classes.background} onClick={() => setIsOpen(false)} />
    </>
  );
};

export const LeftNavigationMenu = ({ isOpen, setIsOpen }) => {
  const portalContainer = useRef();

  const createPortal = () => {
    portalContainer.current = document.createElement('div');
    portalContainer.current.className = classes.portal;

    document.body.appendChild(portalContainer.current);
  };

  const removePortal = () => {
    portalContainer.current.remove();
  };

  !portalContainer && createPortal();

  useEffect(() => {
    return portalContainer.current && removePortal;
  }, [isOpen]);

  return portalContainer.current
    ? reactDom.createPortal(
        <LeftNavigationMenuContent setIsOpen={setIsOpen} />,
        portalContainer.current
      )
    : null;
};
