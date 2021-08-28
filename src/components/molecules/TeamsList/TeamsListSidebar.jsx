import React from 'react'
import { Input } from '../../atoms/Input/Input'
import { Button, ButtonTheme } from '../../atoms/Button'
import { Dropdown } from './../../atoms/Dropdown/Dropdown';
import { ButtonSize } from './../../atoms/Button/Button';


const TeamsListSidebar = (
    {
        isLoading,
        fetchParams,
        applyFilters,
        setFetchParams,
        cleanFilterValues,
    }
) => {
    
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
    
    const handleChange = (e) => {
        const { name, value } = e.target
        setFetchParams({
            ...fetchParams,
            [name]: value
        })
    }

    const handleCleanFilterValues = () => {
        cleanFilterValues()
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