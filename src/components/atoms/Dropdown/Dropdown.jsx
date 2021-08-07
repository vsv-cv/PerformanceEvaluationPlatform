import React, { useRef, useCallback, useState } from 'react'
import PropTypes from 'prop-types'
import { DropdownPortal } from './DropdownPortal';
import { DropdownContent } from './DropdownContent';
import DropDownButton from './DropDownButton';

export const Dropdown = (
  {
    title,
    options,
    keys,
    setKeys,
    disabled,
    multiselect = false
  }
) => {
  const [isOpened, setIsOpened] = useState(false);
  const dropdownButtonRef = useRef(null);
  const underlineRef = useRef(null);

  const createPortalContainer = () => {
    if (document.querySelector('.dropdown-portal')) {
      return;
    }
    const portalContainer = document.createElement('div');
    portalContainer.className='dropdown-portal';

    document.body.appendChild(portalContainer);
  }

  const handleMouseEnter = () => {
    if (!underlineRef.current) {
      return;
    }

    underlineRef.current.style.opacity = 1;
  }

  const handleMouseLeave = () => {
    if (!underlineRef.current) {
      return;
    }

    underlineRef.current.style.opacity = 0;
  }

  const handleDropdownButtonClick = useCallback((e) => {
    if (disabled) {
      return;
    }

    createPortalContainer();

    setIsOpened(true);
  }, [disabled])

  const handleClose = () => {
    document.querySelector('.dropdown-portal')?.remove();
    setIsOpened(false);
  }

  return (
    <>
      <DropDownButton
        ref={{
          dropdownButtonRef,
          underlineRef,
        }}

        {...{
          title,
          disabled,
          handleDropdownButtonClick,
          handleMouseEnter,
          handleMouseLeave,
          options,
          keys,
        }}
      />

      { isOpened &&
        <DropdownPortal>
          <DropdownContent
            options={options}
            callingComponent={dropdownButtonRef.current}
            handleClose={handleClose}
            keys={keys}
            setKeys={setKeys}
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
  keys: PropTypes.arrayOf(PropTypes.string).isRequired,
  setKeys: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
  multiselect: PropTypes.bool,
}

Dropdown.defaultProps = {
  multiselect: false,
}