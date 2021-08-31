import React from 'react'
import { Input } from '../../atoms/Input/Input'
import { Button, ButtonTheme } from '../../atoms/Button'
import { Dropdown } from './../../atoms/Dropdown/Dropdown';
import { ButtonSize } from './../../atoms/Button/Button';
import { DEFAULT_FETCH_PARAMS } from './const';


const TeamsListSidebar = (
    {
        isLoading,
        fetchParams,
        refetchData,
        setFetchParams,
    }
) => {
    const role = [
            {
                key: '1',
                text: 'project1',
            },
            {
                key: '2',
                text: 'project2',
            },
            {
                key: '3',
                text: 'project3',
            },
            {
                key: '4',
                text: 'project4',
        }
    ]
    
    const handleChange = (e) => {
        const { name, value } = e.target
        setFetchParams({
            ...fetchParams,
            [name]: value
        })
    }

    const applyFilters = () => {
        refetchData()
    }

    const handleCleanFilterValues = () => {
        setFetchParams(DEFAULT_FETCH_PARAMS)
        setTimeout(applyFilters)
    }

    return (
        <>
            <Input
                value={fetchParams.Search}
                label="Search by project title"
                type="search"
                name="Search"
                handleChange={(e)=>handleChange(e)}
                disabled={isLoading}
            />
            <Dropdown
                label="Project"
                title="Choose a project..."
                keys={fetchParams.ProjectIds}
                options = {role}
                multiselect
                onSelect={keys =>
                    setFetchParams(prev => ({ ...prev, ProjectIds: keys }))
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

export default TeamsListSidebar