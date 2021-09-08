import React, { useRef, useEffect } from 'react';
import { Input } from '../../atoms/Input/Input';
import { Dropdown } from '../../atoms/Dropdown';
import { Button } from '../../atoms/Button';
import { useUsersContext } from '../../../hooks/useUsersContext';

export const ProjectsListSidebar = ({
  fetchParams,
  setFetchParams,
  isLoading,
  refetch,
}) => {
  const users = useUsersContext();
  const shouldCleanFiltersRef = useRef(false);
  const { Search, CoordinatorIds } = fetchParams;

  const cleanInputValues = () => {
    shouldCleanFiltersRef.current = true;
    setFetchParams(prev => ({
      ...prev,
      Search: '',
      CoordinatorIds: [],
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
        label="Search by project title"
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
        label="Coordinator"
        title="Choose a state..."
        options={users}
        keys={CoordinatorIds}
        onSelect={keys =>
          setFetchParams(prev => ({ ...prev, CoordinatorIds: keys }))
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
