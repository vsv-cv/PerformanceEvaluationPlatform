import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Input } from '../../atoms/Input/Input';
import { Button } from '../../atoms/Button';
import { Dropdown } from '../../atoms/Dropdown/Dropdown';

const FieldsListSidebar = ({
  fetchParams: { Search, AssesmentGroupIds, TypeIds },
  setFetchParams,
  isLoading,
  fieldsType,
  assesmentGroup,
}) => {
  const [filterInputValues, setFilterInputValues] = useState({
    search: Search,
    assesmentGroupIds: [AssesmentGroupIds],
    fieldsTypesDropdown: [TypeIds],
  });

  const handleApplyFilterValues = () => {
    setFetchParams(prev => ({
      ...prev,
      Search: filterInputValues.search,
      AssesmentGroupIds: filterInputValues.assesmentGroupIds[0],
      TypeIds: filterInputValues.fieldsTypesDropdown[0],
    }));
  };
  const shouldCleanFiltersRef = useRef(false);

  const cleanInputValues = () => {
    shouldCleanFiltersRef.current = true;
    setFilterInputValues({
      search: '',
      assesmentGroupIds: [],
      fieldsTypesDropdown: [],
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
        label="Choose type"
        title={'Type'}
        options={fieldsType}
        keys={filterInputValues.fieldsTypesDropdown}
        onSelect={arr =>
          setFilterInputValues(prev => ({
            ...prev,
            fieldsTypesDropdown: arr,
          }))
        }
        disabled={isLoading}
        multiselect={false}
      />

      <Dropdown
        label="Choose Assesment Group"
        title={'Assesment Group'}
        options={assesmentGroup}
        keys={filterInputValues.assesmentGroupIds}
        onSelect={arr =>
          setFilterInputValues(prev => ({
            ...prev,
            assesmentGroupIds: arr,
          }))
        }
        disabled={isLoading}
        multiselect={false}
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

FieldsListSidebar.propTypes = {
  fetchParams: PropTypes.shape({
    Search: PropTypes.string,
    AssesmentGroupIds: PropTypes.arrayOf(PropTypes.number),
    TypeIds: PropTypes.arrayOf(PropTypes.number),
  }).isRequired,
  setFetchParams: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
  assesmentGroup: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string,
      text: PropTypes.string,
    })
  ),
  fieldsType: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string,
      text: PropTypes.string,
    })
  ),
};

export default FieldsListSidebar;
