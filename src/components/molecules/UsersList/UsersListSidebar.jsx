import React from 'react'
import { Input } from '../../atoms/Input/Input'
import { Button, ButtonTheme } from '../../atoms/Button'
import { Dropdown } from './../../atoms/Dropdown/Dropdown';
import { DEFAULT_FETCH_PARAMS } from './const';


const UsersListSidebar = (
    {
        roleIds,
        setRoleIds,
        stateIds,
        setStateIds,
        isLoading,
        fetchParams,
        applyFilters,
        setFetchParams,
    }
) => {

    const level = {
        title: 'Level',
        options: [
            {
                key: '1',
                text: 'Junior',
            },
            {
                key: '2',
                text: 'Middle',
            },
        ],
        onSelect: keys => setStateIds(keys),
        disabled: isLoading,
        multiselect: false
    }

    const role = {
        title: 'Role',
        options: [
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
            },
        ],
        onSelect: keys => setRoleIds(keys),
        disabled: isLoading,
        multiselect: false
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
    }

    return (
        <>
            <Input
                value={fetchParams.EmailOrName}
                label="Search by email or name"
                type="search"
                name="EmailOrName"
                handleChange={(e)=>handleChange(e)}
                disabled={isLoading}
            />
            <Dropdown
                keys={roleIds}
                {...role}
            />
            <Dropdown
                keys={stateIds}
                {...level}
            />
            <Button
                fullwidth
                theme={ButtonTheme.SUCCESS}
                size="small"
                onClick={applyFilters}
                disabled={isLoading}
            >
                Apply Filters
            </Button>
            <Button
                fullwidth
                size="small"
                onClick={handleCleanFilterValues}
                disabled={isLoading}
            >
                Clean Filters
            </Button>

        </>
    )
}

export default UsersListSidebar