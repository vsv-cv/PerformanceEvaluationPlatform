import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Input } from '../../atoms/Input/Input';
import { Dropdown } from '../../atoms/Dropdown';
import { Button } from '../../atoms/Button';
import { Datepicker } from '../../atoms/Datepicker';
import { formatDateToIsoDate } from '../../../utils';

export const SurveysListSidebar = ({
  fetchParams: {
    Search,
    StateIds,
    AssigneeIds,
    SupervisorIds,
    AppointmentDateFrom,
    AppointmentDateTo,
  },
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
    appointmentDateFrom: AppointmentDateFrom,
    appointmentDateTo: AppointmentDateTo,
  });
  const shouldCleanFiltersRef = useRef(false);

  const cleanInputValues = () => {
    shouldCleanFiltersRef.current = true;
    setFilterInputValues({
      search: '',
      stateIds: null,
      assigneeIds: null,
      supervisorIds: null,
      appointmentDateFrom: '',
      appointmentDateTo: '',
    });
  };

  const handleApplyFilterValues = () => {
    setFetchParams(prev => ({
      ...prev,
      Search: filterInputValues.search,
      StateIds: filterInputValues.stateIds,
      AssigneeIds: filterInputValues.assigneeIds,
      SupervisorIds: filterInputValues.supervisorIds,
      AppointmentDateFrom: filterInputValues.appointmentDateFrom,
      AppointmentDateTo: filterInputValues.appointmentDateTo,
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
        title="Choose a state..."
        options={states}
        keys={filterInputValues.stateIds}
        onSelect={keys =>
          setFilterInputValues(prev => ({ ...prev, stateIds: keys }))
        }
        multiselect
      />

      <Dropdown
        label="Assignee"
        title="Choose an assignee..."
        options={asignees}
        keys={filterInputValues.assigneeIds}
        onSelect={keys =>
          setFilterInputValues(prev => ({ ...prev, assigneeIds: keys }))
        }
        multiselect
      />

      <Dropdown
        label="Supervisor"
        title="Choose a supervisor..."
        options={supervisors}
        keys={filterInputValues.supervisorIds}
        onSelect={keys =>
          setFilterInputValues(prev => ({ ...prev, supervisorIds: keys }))
        }
        multiselect
      />

      <Datepicker
        label="Appointment date from"
        placeholderText="Choose an appointment date from..."
        selected={
          filterInputValues.appointmentDateFrom
            ? new Date(filterInputValues.appointmentDateFrom)
            : null
        }
        onChange={date =>
          setFilterInputValues(prev => ({
            ...prev,
            appointmentDateFrom: formatDateToIsoDate(date),
          }))
        }
      />

      <Datepicker
        label="Appointment date to"
        placeholderText="Choose an appointment date to..."
        selected={
          filterInputValues.appointmentDateTo
            ? new Date(filterInputValues.appointmentDateTo)
            : null
        }
        onChange={date =>
          setFilterInputValues(prev => ({
            ...prev,
            appointmentDateTo: formatDateToIsoDate(date),
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
