import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Input } from '../../atoms/Input/Input';
import { Checkbox } from '../../atoms/Checkbox';
import { Button } from '../../atoms/Button';

export const RolesListSidebar = ({
  fetchParams,
  setFetchParams,
  isLoading,
  refetch,
}) => {
  const shouldCleanFiltersRef = useRef(false);
  const { Search, IsPrimary, UsersCountFrom, UsersCountTo } = fetchParams;

  const cleanInputValues = () => {
    shouldCleanFiltersRef.current = true;
    setFetchParams(prev => ({
      ...prev,
      Search: '',
      IsPrimary: null,
      CountFrom: '',
      CountTo: '',
    }));
  };

  useEffect(() => {
    if (!shouldCleanFiltersRef.current) return;

    refetch();
    shouldCleanFiltersRef.current = false;
  }, [fetchParams]); //eslint-disable-line

  return (
    <>
      <Input
        value={Search}
        label="Search by title"
        handleChange={e =>
          setFetchParams(prev => ({
            ...prev,
            Search: e.target.value,
          }))
        }
        type="search"
        name="search"
        disabled={isLoading}
      />

      <Checkbox
        label="Primary only"
        checked={IsPrimary ?? false}
        onChange={() =>
          setFetchParams(prev => ({
            ...prev,
            IsPrimary: !prev.IsPrimary || null,
          }))
        }
        disabled={isLoading}
      />

      <Input
        value={UsersCountFrom}
        label="Count from"
        handleChange={e =>
          setFetchParams(prev => ({
            ...prev,
            CountFrom: e.target.value,
          }))
        }
        type="number"
        name="UsersCountFrom"
        disabled={isLoading}
      />

      <Input
        value={UsersCountTo}
        label="Count to"
        handleChange={e =>
          setFetchParams(prev => ({
            ...prev,
            CountTo: e.target.value,
          }))
        }
        type="number"
        name="UsersCountTo"
        disabled={isLoading}
      />

      <Button fullwidth onClick={refetch} size="medium" disabled={isLoading}>
        Apply Filters
      </Button>

      <Button
        fullwidth
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
  refetchData: PropTypes.func,
};
