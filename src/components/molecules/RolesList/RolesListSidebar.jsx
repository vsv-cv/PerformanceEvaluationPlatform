import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Input } from '../../atoms/Input/Input'
import { Checkbox } from '../../atoms/Checkbox'
import { Button } from '../../atoms/Button'

const RolesListSidebar = (
  {
    filterValues: {
      Search,
      IsPrimary,
      UsersCountFrom,
      UsersCountTo
    },
    setFilterValues,
    isLoading,
    onCleanFilterValues
  }
) => {
  const [filterInputValues, setFilterInputValues] = useState({
    search: Search,
    isPrimary: IsPrimary,
    countFrom: UsersCountFrom,
    countTo: UsersCountTo
  });

  const handleApplyFilterValues = () => {
    setFilterValues({
      Search: filterInputValues.search,
      IsPrimary: filterInputValues.isPrimary,
      UsersCountFrom: filterInputValues.countFrom,
      UsersCountTo: filterInputValues.countTo
    })
  }
  
  return (
    <>
      <Input
        value={filterInputValues.search}
        label="Search by title"
        handleChange={
          e => setFilterInputValues(prev => ({
            ...prev, 
            search: e.target.value
          }))
        }
        type="search"
        name="search"
        disabled={isLoading}
      />

      <Checkbox
        label="Primary only"
        checked={filterInputValues.isPrimary}
        onChange={e => setFilterInputValues(prev => ({
            ...prev,
            isPrimary: !prev.isPrimary ? true : null
          })
        )}
        disabled={isLoading}
      />

      <Input
        value={filterInputValues.countFrom}
        label="Count from"
        handleChange={
          e => setFilterInputValues(prev => ({
            ...prev, 
            countFrom: e.target.value
          }))
        }
        type="number"
        name="UsersCountFrom"
        disabled={isLoading}
      />

      <Input
        value={filterInputValues.countTo}
        label="Count to"
        handleChange={
          e => setFilterInputValues(prev => ({
            ...prev, 
            countTo: e.target.value
          }))
        }
        type="number"
        name="UsersCountTo"
        disabled={isLoading}
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
        onClick={onCleanFilterValues}
        size="medium"
        disabled={isLoading}
      >
        Clean Filters
      </Button>
    </>
  )
}

RolesListSidebar.propTypes = {
  filterValues: PropTypes.shape({
    Search: PropTypes.string,
    IsPrimary: PropTypes.bool,
    UsersCountFrom: PropTypes.string,
    UsersCountTo: PropTypes.string,
  }).isRequired,
  setFilterValues: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
  onCleanFilterValues: PropTypes.func.isRequired,
}

export default RolesListSidebar
