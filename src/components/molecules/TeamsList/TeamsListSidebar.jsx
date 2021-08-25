import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Input } from '../../atoms/Input/Input';
import { Button } from '../../atoms/Button';
import { Dropdown } from '../../atoms/Dropdown';

export const TeamsListSidebar = ({
  fetchParams: { Search },
  setFetchParams,
  isLoading,
    }) => {
    const [filterInputValues, setFilterInputValues] = useState({
        search: Search,
    });
    const shouldCleanFiltersRef = useRef(false);

    const cleanInputValues = () => {
        shouldCleanFiltersRef.current = true;
        setFilterInputValues({
            search: ''
        });
    };

    const handleApplyFilterValues = () => {
        setFetchParams(prev => ({
            ...prev,
            Search: filterInputValues.search,
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
            label="Search by project title"
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
            label="Project"
            title="Choose status..."
            // options={statuses}
            // keys={filterInputValues.statusIds}
            // onSelect={keys =>
            // setFilterInputValues(prev => ({ ...prev, statusIds: keys }))
            // }
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

TeamsListSidebar.propTypes = {
  fetchParams: PropTypes.shape({
    Search: PropTypes.string
  }).isRequired,
  setFetchParams: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
};