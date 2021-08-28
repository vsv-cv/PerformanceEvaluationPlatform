import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Input } from '../../atoms/Input/Input';
import { Button } from '../../atoms/Button';
import { Dropdown } from '../../atoms/Dropdown/Dropdown';
import { Datepicker } from '../../atoms/Datepicker/Datepicker';

const DeeplinksListSidebar = ({
  fetchParams: { Search, StateIds, SentToId, ExpiresAtFrom, ExpiresAtTo },
  setFetchParams,
  isLoading,
  states,
  users,
}) => {
  const [filterInputValues, setFilterInputValues] = useState({
    search: Search,
    stateDropdown: StateIds,
    usersDropdown: [SentToId],
    expiresAtFrom: ExpiresAtFrom,
    expiresAtTo: ExpiresAtTo,
  });

  const handleApplyFilterValues = () => {
    setFetchParams(prev => ({
      ...prev,
      Search: filterInputValues.search,
      StateIds: filterInputValues.stateDropdown,
      SentToId: filterInputValues.usersDropdown[0],
      ExpiresAtTo: filterInputValues.expiresAtTo,
      ExpiresAtFrom: filterInputValues.expiresAtFrom,
    }));
  };
  const shouldCleanFiltersRef = useRef(false);

  const cleanInputValues = () => {
    shouldCleanFiltersRef.current = true;
    setFilterInputValues({
      search: '',
      stateDropdown: [],
      usersDropdown: [],
      expiresAtFrom: '',
      expiresAtTo: '',
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
        label="Choose state"
        title={'State'}
        options={states}
        keys={filterInputValues.stateDropdown}
        onSelect={arr =>
          setFilterInputValues(prev => ({
            ...prev,
            stateDropdown: arr,
          }))
        }
        disabled={isLoading}
        multiselect={true}
      />

      <Dropdown
        label="Choose sent to"
        title={'Sent to'}
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

      <Datepicker
        label={'Expires at from'}
        placeholderText="Choose expires at from"
        selected={
          filterInputValues.expiresAtFrom
            ? filterInputValues.expiresAtFrom
            : null
        }
        onChange={value =>
          setFilterInputValues(prev => ({
            ...prev,
            expiresAtFrom: value,
          }))
        }
      />

      <Datepicker
        label={'Expires at to'}
        placeholderText="Choose expires at to"
        selected={
          filterInputValues.expiresAtTo ? filterInputValues.expiresAtTo : null
        }
        onChange={value =>
          setFilterInputValues(prev => ({
            ...prev,
            expiresAtTo: value,
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

DeeplinksListSidebar.propTypes = {
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

export default DeeplinksListSidebar;
