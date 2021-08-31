import React from 'react'
import { DEFAULT_FETCH_PARAMS } from './const';
import { Input } from '../../atoms/Input/Input'
import { Button, ButtonTheme } from '../../atoms/Button'
import { ButtonSize } from './../../atoms/Button/Button';
import { Dropdown } from './../../atoms/Dropdown/Dropdown';
import { Datepicker } from './../../atoms/Datepicker/Datepicker';
import { formatDateToIsoDate } from './../../../utils/formatDateToIsoDate';

const UsersListSidebar = (
    {
        isLoading,
        fetchParams,
        refetchData,
        setFetchParams,
    }
) => {

    const level =  [
            {
                key: '1',
                text: 'Junior',
            },
            {
                key: '2',
                text: 'Middle',
            },
    ]
    
    const role = [
            {
                key: '1',
                text: 'Backend',
            },
            {
                key: '2',
                text: 'Frontend',
            },
            {
                key: '3',
                text: 'QA',
            },
            {
                key: '4',
                text: 'Team Lead',
        }
    ]

    const applyFilters = () => {
        refetchData()
    }
    
    const handleChange = (e) => {
        const { name, value } = e.target
        setFetchParams({
            ...fetchParams,
            [name]: value
        })
    }

    const handleCleanFilterValues = () => {
        setFetchParams(DEFAULT_FETCH_PARAMS)
        setTimeout(applyFilters)
    }

    return (
        <>
            <Input
                value={fetchParams.Search}
                label="Search by email or name"
                type="search"
                name="Search"
                handleChange={(e)=>handleChange(e)}
                disabled={isLoading}
            />
            <Dropdown
                label="Role"
                title="Choose a role..."
                keys={fetchParams.RoleIds}
                options = {role}
                multiselect
                onSelect={keys =>
                    setFetchParams(prev => ({ ...prev, RoleIds: keys }))
                }
            />
            <Dropdown
                label="Level"
                title="Choose a level..."
                keys={fetchParams.StateIds}
                options={level}
                multiselect
                onSelect={keys =>
                    setFetchParams(prev => ({ ...prev, StateIds: keys }))
                }
            />
            <Datepicker
                label="Next PE date to"
                placeholderText="Choose next PE date to..."
                selected={
                    fetchParams.NextPEDate ? new Date(fetchParams.NextPEDate)
                        : null
                }
                onChange={date =>
                    setFetchParams(prev => ({
                        ...prev,
                        NextPEDate: formatDateToIsoDate(date),
                    }))
                }
            />
            <Button
                fullwidth
                disabled={isLoading}
                onClick={applyFilters}
                size={ButtonSize.SMALL}
                theme={ButtonTheme.SUCCESS}
            >
                Apply Filters
            </Button>
            <Button
                fullwidth
                disabled={isLoading}
                size={ButtonSize.SMALL}
                onClick={handleCleanFilterValues}
            >
                Clean Filters
            </Button>

        </>
    )
}

export default UsersListSidebar