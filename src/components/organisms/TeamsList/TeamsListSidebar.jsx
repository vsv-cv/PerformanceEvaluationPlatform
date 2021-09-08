import React, { useRef, useEffect } from 'react';
import { Input } from '../../atoms/Input/Input';
import { Dropdown } from '../../atoms/Dropdown';
import { Button } from '../../atoms/Button';
import { PROJECTS_OPTIONS_MOCK } from './const';

export const TeamsListSidebar = ({
  fetchParams,
  setFetchParams,
  isLoading,
  refetch,
}) => {
  const shouldCleanFiltersRef = useRef(false);
  const { Search, ProjectIds } = fetchParams;

  const cleanInputValues = () => {
    shouldCleanFiltersRef.current = true;
    setFetchParams(prev => ({
      ...prev,
      Search: '',
      ProjectIds: [],
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
        label="Project"
        title="Choose a project..."
        options={PROJECTS_OPTIONS_MOCK}
        keys={ProjectIds}
        onSelect={keys =>
          setFetchParams(prev => ({ ...prev, ProjectIds: keys }))
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
