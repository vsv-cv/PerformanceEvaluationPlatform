import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Input } from '../../atoms/Input/Input';
import { Button } from '../../atoms/Button';
import { Dropdown } from '../../atoms/Dropdown/Dropdown';
import { Datepicker } from '../../atoms/Datepicker/Datepicker';
import { useDocumentTypes } from './hooks/useDocumentTypes';
import { useUsersContext } from '../../../hooks/useUsersContext';

const DocumentListSidebar = ({
  fetchParams,
  setFetchParams,
  isLoading,
  refetch,
}) => {
  const { Search, UserIds, TypeIds, ValidTo } = fetchParams;
  const shouldCleanFiltersRef = useRef(false);
  const docTypes = useDocumentTypes();
  const users = useUsersContext();

  const cleanInputValues = () => {
    shouldCleanFiltersRef.current = true;
    setFetchParams({
      Search: '',
      UserIds: [],
      TypeIds: [],
      ValidTo: '',
    });
  };

  useEffect(() => {
    if (!shouldCleanFiltersRef.current) return;

    refetch();
    shouldCleanFiltersRef.current = false;
  }, [filterInputValues]); //eslint-disable-line

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
        label="Choose user"
        title={'User'}
        options={users}
        keys={UserIds}
        onSelect={keys =>
          setFetchParams(prev => ({
            ...prev,
            usersDropdown: keys,
          }))
        }
        disabled={isLoading}
        multiselect={false}
      />

      <Dropdown
        label="Choose document type"
        title={'Document type'}
        options={docTypes}
        keys={TypeIds}
        onSelect={keys =>
          setFetchParams(prev => ({
            ...prev,
            docTypesDropdown: keys,
          }))
        }
        disabled={isLoading}
        multiselect={false}
      />

      <Datepicker
        label={'Expires untill'}
        placeholderText="Choose expires untill"
        selected={ValidTo ? ValidTo : null}
        onChange={value =>
          setFetchParams(prev => ({
            ...prev,
            ExpiresUntill: value,
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

DocumentListSidebar.propTypes = {
  fetchParams: PropTypes.shape({
    Search: PropTypes.string,
    IsPrimary: PropTypes.bool,
    UsersCountFrom: PropTypes.string,
    UsersCountTo: PropTypes.string,
  }).isRequired,
  setFetchParams: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
  states: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string,
      text: PropTypes.string,
    })
  ),
  users: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string,
      text: PropTypes.string,
    })
  ),
};

export default DocumentListSidebar;
