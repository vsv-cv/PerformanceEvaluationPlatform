import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Input } from '../../atoms/Input/Input'
import { Dropdown } from '../../atoms/Dropdown'
import { Button } from '../../atoms/Button'
import classes from './styles/index.module.scss'

export const SurveysListSidebar = (
  {
    fetchParams: {
      Search,
    },
    setFetchParams,
    isLoading,
    onCleanFilterValues
  }
) => {
  const [filterInputValues, setFilterInputValues] = useState({
    search: Search,
  });

  const handleApplyFilterValues = () => {
    setFetchParams(prev => ({
      ...prev,
      Search: filterInputValues.search,
      IsNotEmptyOnly: filterInputValues.isNotEmptyOnly,
      CountFrom: filterInputValues.countFrom,
      CountTo: filterInputValues.countTo
    }))
  }

  return (
    <>
      <Input
        value={filterInputValues.search}
        label="Search by email or name"
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

      <h3 className={classes.label}>Role</h3>

      <Dropdown
        title="Developer"
        options={[]}
        keys={[]}
        onSelect={() => {}}
        disabled={false}
      />

      <h3 className={classes.label}>Level</h3>

      <Dropdown
        title="Senior"
        options={[]}
        keys={[]}
        onSelect={() => {}}
        disabled={false}
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

SurveysListSidebar.propTypes = {
  fetchParams: PropTypes.shape({
    Search: PropTypes.string,
    IsPrimary: PropTypes.bool,
    UsersCountFrom: PropTypes.string,
    UsersCountTo: PropTypes.string,
  }).isRequired,
  setFetchParams: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
  onCleanFilterValues: PropTypes.func.isRequired,
}