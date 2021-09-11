import { useState, useCallback, useRef, useEffect } from 'react';

export const useCreatePortalContainer = className => {
  const [portalContainer, setPortalContainer] = useState();
  const portalContainerRef = useRef();

  const createPortal = useCallback(() => {
    portalContainerRef.current = document.createElement('div');
    portalContainerRef.current.className = className;
    document.body.appendChild(portalContainerRef.current);
    setPortalContainer(portalContainerRef.current);
  }, [className]);

  const removePortal = () => {
    portalContainerRef.current?.remove();
  };

  useEffect(() => {
    createPortal();
    return removePortal;
  }, [createPortal]);

  return portalContainer;
};
