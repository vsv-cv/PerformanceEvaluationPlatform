import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Input } from '../../atoms/Input/Input';
import { Button } from '../../atoms/Button';
import { Dropdown } from '../../atoms/Dropdown/Dropdown';
import { Datepicker } from '../../atoms/Datepicker/Datepicker';
import { useDeeplinksStates } from './hooks/useDeeplinksStates';
import { useUsersContext } from '../../../hooks/useUsersContext';

export const DeeplinksListSidebar = ({
  fetchParams,
  setFetchParams,
  isLoading,
  refetch,
}) => {
  const states = useDeeplinksStates();
  const users = useUsersContext();
  const shouldCleanFiltersRef = useRef(false);
  const { Search, StateIds, SentToId, ExpiresAtFrom, ExpiresAtTo } =
    fetchParams;

  const cleanInputValues = () => {
    shouldCleanFiltersRef.current = true;
    setFetchParams(prev => ({
      ...prev,
      Search: '',
      StateIds: [],
      SentToId: [],
      ExpiresAtFrom: '',
      ExpiresAtTo: '',
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
            search: e.target.value,
          }))
        }
        type="search"
        name="search"
        disabled={isLoading}
      />

      <Dropdown
        label="Choose state"
        title={'State'}
        options={states}
        keys={StateIds}
        onSelect={keys =>
          setFetchParams(prev => ({
            ...prev,
            StateIds: keys,
          }))
        }
        disabled={isLoading}
      />

      <Dropdown
        label="Choose sent to"
        title={'Sent to'}
        options={users}
        keys={SentToId}
        onSelect={keys =>
          setFetchParams(prev => ({
            ...prev,
            SentToId: keys,
          }))
        }
        disabled={isLoading}
        multiselect
        hasSearch
      />

      <Datepicker
        label={'Expires at from'}
        placeholderText="Choose expires at from"
        selected={ExpiresAtFrom ? ExpiresAtFrom : null}
        onChange={value =>
          setFetchParams(prev => ({
            ...prev,
            expiresAtFrom: value,
          }))
        }
      />

      <Datepicker
        label={'Expires at to'}
        placeholderText="Choose expires at to"
        selected={ExpiresAtTo ? ExpiresAtTo : null}
        onChange={value =>
          setFetchParams(prev => ({
            ...prev,
            expiresAtTo: value,
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

DeeplinksListSidebar.propTypes = {
  fetchParams: PropTypes.shape({
    Search: PropTypes.string,
    IsPrimary: PropTypes.bool,
    UsersCountFrom: PropTypes.string,
    UsersCountTo: PropTypes.string,
  }).isRequired,
  setFetchParams: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
};
