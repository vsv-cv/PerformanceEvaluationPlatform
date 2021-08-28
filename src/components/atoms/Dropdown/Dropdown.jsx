import React, {
  useMemo,
  useRef,
  useState,
  useCallback,
  useEffect,
} from 'react';
import PropTypes from 'prop-types';
import { DropdownPortal } from './DropdownPortal';
import { DropdownContent } from './DropdownContent';
import { DropdownButton } from './DropdownButton';
import classes from './styles/index.module.scss';

export const Dropdown = ({
  label,
  title,
  options,
  keys,
  onSelect,
  disabled,
  multiselect = false,
  hasSearch = false,
}) => {
  if (!multiselect && keys.length > 1) {
    throw new Error('Expected only one selected option in dropdown');
  }

  const [isOpen, setIsOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const dropdownButtonRef = useRef(null);
  const filteredBySearchOptions = useMemo(() => {
    return options?.filter(option => {
      return option.text.toLowerCase().includes(searchValue.toLowerCase());
    });
  }, [searchValue, options]);

  const createPortalContainer = () => {
    if (document.querySelector('.dropdown-portal')) {
      return;
    }
    const portalContainer = document.createElement('div');
    portalContainer.className = 'dropdown-portal';

    document.body.appendChild(portalContainer);
  };

  const handleDropdownButtonClick = e => {
    if (disabled) {
      return;
    }

    createPortalContainer();

    setIsOpen(true);
  };

  const handleClose = useCallback(() => {
    document.querySelector('.dropdown-portal')?.remove();
    setSearchValue('');
    setIsOpen(false);
  }, [setIsOpen]);

  useEffect(() => {
    const cleanup = window.addEventListener('keyup', e => {
      if (e.key === 'Escape' || (keys?.length > 0 && e.key === 'Enter')) {
        handleClose();
      }
    });
    return cleanup;
  }, [handleClose, keys]);

  return (
    <div>
      {label && <label className={classes.label}>{label}</label>}

      <DropdownButton
        ref={{
          dropdownButtonRef,
        }}
        {...{
          label,
          isOpen,
          title,
          disabled,
          handleDropdownButtonClick,
          options: filteredBySearchOptions,
          keys,
          hasSearch,
          searchValue,
          setSearchValue,
        }}
      />

      {isOpen && (
        <DropdownPortal>
          <DropdownContent
            options={filteredBySearchOptions}
            callingComponent={dropdownButtonRef.current}
            handleClose={handleClose}
            keys={keys}
            onSelect={onSelect}
            multiselect={multiselect}
            setSearchValue={setSearchValue}
          />
        </DropdownPortal>
      )}
    </div>
  );
};

Dropdown.propTypes = {
  label: PropTypes.string,
  title: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      text: PropTypes.string,
    })
  ),
  keys: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  ),
  onSelect: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  multiselect: PropTypes.bool,
  hasSearch: PropTypes.bool,
};
