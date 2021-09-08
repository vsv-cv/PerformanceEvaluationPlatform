import React, { useRef, useEffect } from 'react';
import { Input } from '../../atoms/Input/Input';
import { Dropdown } from '../../atoms/Dropdown';
import { Button } from '../../atoms/Button';
import { Datepicker } from '../../atoms/Datepicker';
import { formatDateToIsoDate } from '../../../utils';
import { ROLE_OPTIONS, LEVEL_OPTIONS } from './const';

export const UsersListSidebar = ({
  fetchParams,
  setFetchParams,
  isLoading,
  refetch,
}) => {
  const shouldCleanFiltersRef = useRef(false);
  const { EmailOrName, NextPEDate, RoleIds, StateIds } = fetchParams;

  const cleanInputValues = () => {
    shouldCleanFiltersRef.current = true;
    setFetchParams(prev => ({
      ...prev,
      EmailOrName: '',
      NextPEDate: '',
      RoleIds: [],
      StateIds: [],
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
        value={EmailOrName}
        label="Search by email or name"
        handleChange={e =>
          setFetchParams(prev => ({
            ...prev,
            EmailOrName: e.target.value,
          }))
        }
        type="search"
        name="search"
        disabled={isLoading}
      />

      <Dropdown
        label="Role"
        title="Choose a state..."
        options={ROLE_OPTIONS}
        keys={RoleIds}
        onSelect={keys => setFetchParams(prev => ({ ...prev, RoleIds: keys }))}
        multiselect
      />

      <Dropdown
        label="Assignee"
        title="Choose an assignee..."
        options={LEVEL_OPTIONS}
        keys={StateIds}
        onSelect={keys => setFetchParams(prev => ({ ...prev, StateIds: keys }))}
        multiselect
      />

      <Datepicker
        label="Next PE date to"
        placeholderText="Choose next PE date to..."
        selected={NextPEDate ? new Date(NextPEDate) : null}
        onChange={date =>
          setFetchParams(prev => ({
            ...prev,
            NextPEDate: formatDateToIsoDate(date),
          }))
        }
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
