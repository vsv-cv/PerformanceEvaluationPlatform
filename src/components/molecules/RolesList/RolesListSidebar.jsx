import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Input } from '../../atoms/Input/Input';
import { Checkbox } from '../../atoms/Checkbox';
import { Button } from '../../atoms/Button';

const RolesListSidebar = ({
  fetchParams: { Search, IsPrimary, UsersCountFrom, UsersCountTo },
  setFetchParams,
  isLoading,
}) => {
  const [filterInputValues, setFilterInputValues] = useState({
    search: Search,
    isPrimary: !!IsPrimary,
    countFrom: UsersCountFrom,
    countTo: UsersCountTo,
  });
  const shouldCleanFiltersRef = useRef(false);

  const cleanInputValues = () => {
    shouldCleanFiltersRef.current = true;
    setFilterInputValues({
      search: '',
      isPrimary: false,
      countFrom: '',
      countTo: '',
    });
  };

  const handleApplyFilterValues = () => {
    setFetchParams(prev => ({
      ...prev,
      Search: filterInputValues.search,
      IsPrimary: filterInputValues.isPrimary || null,
      UsersCountFrom: filterInputValues.countFrom,
      UsersCountTo: filterInputValues.countTo,
    }));
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

      <Checkbox
        label="Primary only"
        checked={filterInputValues.isPrimary}
        onChange={() =>
          setFilterInputValues(prev => ({
            ...prev,
            isPrimary: !prev.isPrimary,
          }))
        }
        disabled={isLoading}
      />

      <Input
        value={filterInputValues.countFrom}
        label="Count from"
        handleChange={e =>
          setFilterInputValues(prev => ({
            ...prev,
            countFrom: e.target.value,
          }))
        }
        type="number"
        name="UsersCountFrom"
        disabled={isLoading}
      />

      <Input
        value={filterInputValues.countTo}
        label="Count to"
        handleChange={e =>
          setFilterInputValues(prev => ({
            ...prev,
            countTo: e.target.value,
          }))
        }
        type="number"
        name="UsersCountTo"
        disabled={isLoading}
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

RolesListSidebar.propTypes = {
  fetchParams: PropTypes.shape({
    Search: PropTypes.string,
    IsPrimary: PropTypes.bool,
    UsersCountFrom: PropTypes.string,
    UsersCountTo: PropTypes.string,
  }).isRequired,
  setFetchParams: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
};

export default RolesListSidebar;
