import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Input } from '../../atoms/Input/Input';
import { Dropdown } from '../../atoms/Dropdown';
import { Button } from '../../atoms/Button';

export const SurveysListSidebar = ({
  fetchParams: { Search, StateIds, AssigneeIds, SupervisorIds },
  setFetchParams,
  isLoading,
  states,
  asignees,
  supervisors,
}) => {
  const [filterInputValues, setFilterInputValues] = useState({
    search: Search,
    stateIds: StateIds,
    assigneeIds: AssigneeIds,
    supervisorIds: SupervisorIds,
  });
  const shouldCleanFiltersRef = useRef(false);

  const cleanInputValues = () => {
    shouldCleanFiltersRef.current = true;
    setFilterInputValues({
      search: '',
      stateIds: null,
      assigneeIds: null,
      supervisorIds: null,
    });
  };

  const handleApplyFilterValues = () => {
    setFetchParams(prev => ({
      ...prev,
      Search: filterInputValues.search,
      IsNotEmptyOnly: filterInputValues.isNotEmptyOnly,
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
        label="Search by email or name"
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
        label="State"
        title="Choose state..."
        options={states}
        keys={filterInputValues.stateIds}
        onSelect={keys =>
          setFilterInputValues(prev => ({ ...prev, stateIds: keys }))
        }
        multiselect
      />

      <Dropdown
        label="Assignee"
        title="Choose assignee..."
        options={asignees}
        keys={filterInputValues.assigneeIds}
        onSelect={keys =>
          setFilterInputValues(prev => ({ ...prev, assigneeIds: keys }))
        }
        multiselect
      />

      <Dropdown
        label="Supervisor"
        title="Choose supervisor..."
        options={supervisors}
        keys={filterInputValues.supervisorIds}
        onSelect={keys =>
          setFilterInputValues(prev => ({ ...prev, supervisorIds: keys }))
        }
        multiselect
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

SurveysListSidebar.propTypes = {
  fetchParams: PropTypes.shape({
    Search: PropTypes.string,
    IsPrimary: PropTypes.bool,
    UsersCountFrom: PropTypes.string,
    UsersCountTo: PropTypes.string,
  }).isRequired,
  setFetchParams: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
  asignees: PropTypes.array,
};
