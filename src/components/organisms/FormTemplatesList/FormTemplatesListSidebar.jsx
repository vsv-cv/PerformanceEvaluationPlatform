import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Input } from '../../atoms/Input/Input';
import { Button } from '../../atoms/Button';
import { Dropdown } from '../../atoms/Dropdown';
import { useFormTemplatesStates } from './hooks/useFormTemplatesStates';

export const FormTemplatesListSidebar = ({
  fetchParams,
  setFetchParams,
  isLoading,
  refetch,
}) => {
  const states = useFormTemplatesStates();
  const shouldCleanFiltersRef = useRef(false);
  const { Search, StatusIds } = fetchParams;

  const cleanInputValues = () => {
    shouldCleanFiltersRef.current = true;
    setFetchParams(prev => ({
      ...prev,
      Search: '',
      StatusIds: [],
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
        label="Search by name"
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

      <Dropdown
        label="Status"
        title="Choose status..."
        options={states}
        keys={StatusIds}
        onSelect={keys =>
          setFetchParams(prev => ({ ...prev, StatusIds: keys }))
        }
        multiselect
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

FormTemplatesListSidebar.propTypes = {
  fetchParams: PropTypes.shape({
    Search: PropTypes.string,
    StatusIds: PropTypes.array,
  }).isRequired,
  setFetchParams: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
  refetch: PropTypes.func,
};
