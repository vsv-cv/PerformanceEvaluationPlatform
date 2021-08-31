import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Input } from '../../atoms/Input/Input';
import { Button } from '../../atoms/Button';
import { Dropdown } from '../../atoms/Dropdown';

export const FormTemplatesListSidebar = ({
  fetchParams: { Search, StatusIds },
  setFetchParams,
  statuses,
  isLoading,
    }) => {
    const [filterInputValues, setFilterInputValues] = useState({
        search: Search,
        statusIds: StatusIds
    });
    const shouldCleanFiltersRef = useRef(false);

    const cleanInputValues = () => {
        shouldCleanFiltersRef.current = true;
        setFilterInputValues({
            search: '',
            statusIds: null
        });
    };

    const handleApplyFilterValues = () => {
        setFetchParams(prev => ({
            ...prev,
            Search: filterInputValues.search,
            StatusIds: filterInputValues.statusIds
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
            label="Search by name"
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
            label="Status"
            title="Choose status..."
            options={statuses}
            keys={filterInputValues.statusIds}
            onSelect={keys =>
            setFilterInputValues(prev => ({ ...prev, statusIds: keys }))
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

FormTemplatesListSidebar.propTypes = {
  fetchParams: PropTypes.shape({
    Search: PropTypes.string,
    StatusIds: PropTypes.array
  }).isRequired,
  setFetchParams: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
};