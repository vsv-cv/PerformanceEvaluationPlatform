import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Input } from '../../atoms/Input/Input';
import { Button } from '../../atoms/Button';
import { Dropdown } from '../../atoms/Dropdown/Dropdown';
import { Datepicker } from '../../atoms/Datepicker/Datepicker';

const DocumentListSidebar = ({
  fetchParams: { Search, UserIds, TypeIds, ValidTo },
  setFetchParams,
  isLoading,
  users,
  docTypes,
}) => {
  const [filterInputValues, setFilterInputValues] = useState({
    search: Search,
    usersDropdown: [UserIds],
    docTypesDropdown: [TypeIds],
    expiresUntill: ValidTo,
  });

  const handleApplyFilterValues = () => {
    setFetchParams(prev => ({
      ...prev,
      Search: filterInputValues.search,
      UserIds: filterInputValues.usersDropdown[0],
      TypeIds: filterInputValues.docTypesDropdown[0],
      ValidTo: filterInputValues.expiresUntill,
    }));
  };
  const shouldCleanFiltersRef = useRef(false);

  const cleanInputValues = () => {
    shouldCleanFiltersRef.current = true;
    setFilterInputValues({
      search: '',
      usersDropdown: [],
      docTypesDropdown: [],
      expiresUntill: '',
    });
  };

  useEffect(() => {
    if (!shouldCleanFiltersRef.current) return;

    handleApplyFilterValues();
    shouldCleanFiltersRef.current = false;
  }, [filterInputValues]); //eslint-disable-line

  return (
    <>
      <Input
        value={filterInputValues.search}
        label="Search by title"
        handleChange={e =>
          setFilterInputValues(prev => ({
            ...prev,
            search: e.target.value,
          }))
        }
        type="search"
        name="search"
        disabled={isLoading}
      />

      <Dropdown
        label="Choose user"
        title={'User'}
        options={users}
        keys={filterInputValues.usersDropdown}
        onSelect={arr =>
          setFilterInputValues(prev => ({
            ...prev,
            usersDropdown: arr,
          }))
        }
        disabled={isLoading}
        multiselect={false}
      />

      <Dropdown
        label="Choose document type"
        title={'Document type'}
        options={docTypes}
        keys={filterInputValues.docTypesDropdown}
        onSelect={arr =>
          setFilterInputValues(prev => ({
            ...prev,
            docTypesDropdown: arr,
          }))
        }
        disabled={isLoading}
        multiselect={false}
      />

      <Datepicker
        label={'Expires untill'}
        placeholderText="Choose expires untill"
        selected={
          filterInputValues.expiresUntill
            ? filterInputValues.expiresUntill
            : null
        }
        onChange={value =>
          setFilterInputValues(prev => ({
            ...prev,
            expiresUntill: value,
          }))
        }
      />

      <Button
        width="width"
        onClick={handleApplyFilterValues}
        size="medium"
        disabled={isLoading}
      >
        Apply Filters
      </Button>

      <Button
        width="width"
        onClick={cleanInputValues}
        size="medium"
        disabled={isLoading}
      >
        Clean Filters
      </Button>
    </>
  );
};

DocumentListSidebar.propTypes = {
  fetchParams: PropTypes.shape({
    Search: PropTypes.string,
    IsPrimary: PropTypes.bool,
    UsersCountFrom: PropTypes.string,
    UsersCountTo: PropTypes.string,
  }).isRequired,
  setFetchParams: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
  states: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string,
      text: PropTypes.string,
    })
  ),
  users: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string,
      text: PropTypes.string,
    })
  ),
};

export default DocumentListSidebar;
