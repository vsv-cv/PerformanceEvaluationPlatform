import React, { useRef, useState, useCallback } from 'react'
import PropTypes from 'prop-types'
import { DropdownPortal } from './DropdownPortal';
import { DropdownContent } from './DropdownContent';
import { DropdownButton } from './DropdownButton';

export const Dropdown = (
  {
    title,
    options,
    keys,
    onSelect,
    disabled,
    multiselect = false
  }
) => {
  if (!multiselect && keys.length > 1) {
    throw new Error('Expected only one selected option in dropdown')
  }

  const [isOpen, setIsOpen] = useState(false);
  const dropdownButtonRef = useRef(null);

  const createPortalContainer = () => {
    if (document.querySelector('.dropdown-portal')) {
      return;
    }
    const portalContainer = document.createElement('div');
    portalContainer.className='dropdown-portal';

    document.body.appendChild(portalContainer);
  }

  const handleDropdownButtonClick = e => {
    if (disabled) {
      return;
    }

    createPortalContainer();

    setIsOpen(true);
  }

  const handleClose = useCallback(() => {
    document.querySelector('.dropdown-portal')?.remove();
    setIsOpen(false);
  }, [setIsOpen])

  return (
    <>
      <DropdownButton
        ref={{
          dropdownButtonRef,
        }}

        {...{
          isOpen,
          title,
          disabled,
          handleDropdownButtonClick,
          options,
          keys,
        }}
      />

      { isOpen &&
        <DropdownPortal>
          <DropdownContent
            options={options}
            callingComponent={dropdownButtonRef.current}
            handleClose={handleClose}
            keys={keys}
            onSelect={onSelect}
            multiselect={multiselect}
          />
        </DropdownPortal>
      }
    </>
  )
}

Dropdown.propTypes = {
  title: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      text: PropTypes.string,
    })
  ).isRequired,
  keys: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])).isRequired,
  onSelect: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
  multiselect: PropTypes.bool,
}