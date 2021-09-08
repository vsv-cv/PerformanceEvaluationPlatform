import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Input } from '../../atoms/Input/Input';
import { Button } from '../../atoms/Button';
import { Dropdown } from '../../atoms/Dropdown/Dropdown';
import { useFieldsTypes } from './hooks/useFieldsTypes';

const FieldsListSidebar = ({
  fetchParams,
  setFetchParams,
  isLoading,
  refetch,
}) => {
  const shouldCleanFiltersRef = useRef(false);
  const fieldsTypes = useFieldsTypes();
  const { Search, AssesmentGroupIds, TypeIds } = fetchParams;

  const cleanInputValues = () => {
    shouldCleanFiltersRef.current = true;
    setFetchParams({
      Search: '',
      AssesmentGroupIds: [],
      TypeIds: [],
    });
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

      <Dropdown
        label="Choose type"
        title={'Type'}
        options={fieldsTypes}
        keys={TypeIds}
        onSelect={keys =>
          setFetchParams(prev => ({
            ...prev,
            TypeIds: keys,
          }))
        }
        disabled={isLoading}
        multiselect={false}
      />

      <Dropdown
        label="Choose Assesment Group"
        title={'Assesment Group'}
        options={[]}
        keys={AssesmentGroupIds}
        onSelect={arr =>
          setFetchParams(prev => ({
            ...prev,
            AssesmentGroupIds: arr,
          }))
        }
        disabled={isLoading}
        multiselect={false}
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

FieldsListSidebar.propTypes = {
  fetchParams: PropTypes.shape({
    Search: PropTypes.string,
    AssesmentGroupIds: PropTypes.arrayOf(PropTypes.number),
    TypeIds: PropTypes.arrayOf(PropTypes.number),
  }).isRequired,
  setFetchParams: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
};

export default FieldsListSidebar;
