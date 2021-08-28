import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Input } from '../../atoms/Input/Input';
import { Dropdown } from '../../atoms/Dropdown';
import { Button } from '../../atoms/Button';
import { Datepicker } from '../../atoms/Datepicker';
import { formatDateToIsoDate } from '../../../utils';

export const SurveysListSidebar = ({
  fetchParams,
  setFetchParams,
  isLoading,
  states,
  asignees,
  supervisors,
  refetchData,
}) => {
  const shouldCleanFiltersRef = useRef(false);
  const {
    Search,
    StateIds,
    AssigneeIds,
    SupervisorIds,
    AppointmentDateFrom,
    AppointmentDateTo,
  } = fetchParams;

  const cleanInputValues = () => {
    shouldCleanFiltersRef.current = true;
    setFetchParams(prev => ({
      ...prev,
      Search: '',
      StateIds: [],
      AssigneeIds: [],
      SupervisorIds: [],
      AppointmentDateFrom: '',
      AppointmentDateTo: '',
    }));
  };

  useEffect(() => {
    if (!shouldCleanFiltersRef.current) return;

    setTimeout(refetchData);
    shouldCleanFiltersRef.current = false;
  }, [fetchParams]); //eslint-disable-line

  return (
    <>
      <Input
        value={Search}
        label="Search by email or name"
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
        label="State"
        title="Choose a state..."
        options={states}
        keys={StateIds}
        onSelect={keys => setFetchParams(prev => ({ ...prev, StateIds: keys }))}
        multiselect
      />

      <Dropdown
        label="Assignee"
        title="Choose an assignee..."
        options={asignees}
        keys={AssigneeIds}
        onSelect={keys =>
          setFetchParams(prev => ({ ...prev, AssigneeIds: keys }))
        }
        multiselect
        hasSearch
      />

      <Dropdown
        label="Supervisor"
        title="Choose a supervisor..."
        options={supervisors}
        keys={SupervisorIds}
        onSelect={keys =>
          setFetchParams(prev => ({ ...prev, SupervisorIds: keys }))
        }
        multiselect
        hasSearch
      />

      <Datepicker
        label="Appointment date from"
        placeholderText="Choose an appointment date from..."
        selected={AppointmentDateFrom ? new Date(AppointmentDateFrom) : null}
        onChange={date =>
          setFetchParams(prev => ({
            ...prev,
            AppointmentDateFrom: formatDateToIsoDate(date),
          }))
        }
      />

      <Datepicker
        label="Appointment date to"
        placeholderText="Choose an appointment date to..."
        selected={AppointmentDateTo ? new Date(AppointmentDateTo) : null}
        onChange={date =>
          setFetchParams(prev => ({
            ...prev,
            AppointmentDateTo: formatDateToIsoDate(date),
          }))
        }
      />

      <Button
        width="width"
        onClick={refetchData}
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
  refetchData: PropTypes.func,
};
