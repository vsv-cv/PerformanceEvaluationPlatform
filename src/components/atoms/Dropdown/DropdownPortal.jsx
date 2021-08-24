import ReactDOM from 'react-dom';
import './styles/dropdownPortal.scss';

export const DropdownPortal = ({ children }) => {
  const portalContainer = document.querySelector('.dropdown-portal');

  return portalContainer
    ? ReactDOM.createPortal(children, portalContainer)
    : null;
};
