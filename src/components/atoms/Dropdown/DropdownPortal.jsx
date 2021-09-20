import React from 'react';
import ReactDOM from 'react-dom';
import './styles/dropdownPortal.scss';

export const DropdownPortal = React.forwardRef(({ children }, ref) => {
  const portalContainer = ref.current;

  return portalContainer
    ? ReactDOM.createPortal(children, portalContainer)
    : null;
});

DropdownPortal.displayName = 'DropdownPortal';
