import React from 'react'
import { Input } from '../../atoms/Input/Input'
import { Button, ButtonTheme } from '../../atoms/Button'
import { Dropdown } from '../../atoms/Dropdown/Dropdown';
import { ButtonSize } from '../../atoms/Button/Button';


const ProjectsListSidebar = (
    {
        isLoading,
        fetchParams,
        applyFilters,
        setFetchParams,
        cleanFiltersValues,
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
    
    const handleChange = (e) => {
        const { name, value } = e.target
        setFetchParams({
            ...fetchParams,
            [name]: value
        })
    }

    const handleCleanFiltersValues = () => {
        cleanFiltersValues()
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
                label="Coordinator"
                title="Choose a cordinator..."
                keys={fetchParams.CoordinatorIds}
                options={level}
                multiselect
                onSelect={keys =>
                    setFetchParams(prev => ({ ...prev, CoordinatorIds: keys }))
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
                onClick={handleCleanFiltersValues}
            >
                Clean Filters
            </Button>

        </>
    )
}

export default ProjectsListSidebar