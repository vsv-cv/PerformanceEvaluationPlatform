import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Input } from '../../atoms/Input/Input';
import { Checkbox } from '../../atoms/Checkbox';
import { Button } from '../../atoms/Button';

export const FieldGroupsListSidebar = ({
  fetchParams: { Search, IsNotEmptyOnly, CountFrom, CountTo },
  setFetchParams,
  isLoading,
}) => {
  const [filterInputValues, setFilterInputValues] = useState({
    search: Search,
    isNotEmptyOnly: IsNotEmptyOnly,
    countFrom: CountFrom,
    countTo: CountTo,
  });
  const shouldCleanFiltersRef = useRef(false);

  const cleanInputValues = () => {
    shouldCleanFiltersRef.current = true;
    setFilterInputValues({
      search: '',
      isNotEmptyOnly: false,
      countFrom: '',
      countTo: '',
    });
  };

  const handleApplyFilterValues = () => {
    setFetchParams(prev => ({
      ...prev,
      Search: filterInputValues.search,
      IsNotEmptyOnly: filterInputValues.isNotEmptyOnly || null,
      CountFrom: filterInputValues.countFrom,
      CountTo: filterInputValues.countTo,
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
        label="Only not empty"
        checked={filterInputValues.isNotEmptyOnly}
        onChange={() =>
          setFilterInputValues(prev => ({
            ...prev,
            isNotEmptyOnly: !prev.isNotEmptyOnly,
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

FieldGroupsListSidebar.propTypes = {
  fetchParams: PropTypes.shape({
    Search: PropTypes.string,
    IsPrimary: PropTypes.bool,
    UsersCountFrom: PropTypes.string,
    UsersCountTo: PropTypes.string,
  }).isRequired,
  setFetchParams: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
};
