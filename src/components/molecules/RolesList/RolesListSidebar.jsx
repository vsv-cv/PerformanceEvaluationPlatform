import React from 'react'
import PropTypes from 'prop-types'
import { Input } from '../../atoms/Input/Input'
import { Checkbox } from '../../atoms/Checkbox'
import { Button } from '../../atoms/Button'

const RolesListSidebar = (
  {
    filterValues: {
      searchValue,
      isPrimaryOnly,
      countFrom,
      countTo
    },
    setFilterValues,
    disabled,
    onApplyFilterValues,
    onCleanFilterValues
  }
) => {
  return (
    <>
      <Input
        value={searchValue}
        label="Search by title"
        handleChange={
          e => setFilterValues(prev => ({
            ...prev, 
            searchValue: e.target.value
          }))
        }
        type="search"
        name="search"
        disabled={disabled}
      />

      <Checkbox
        label="Primary only"
        checked={isPrimaryOnly}
        onChange={() => setFilterValues(prev => ({
          ...prev,
          isPrimaryOnly: !prev.isPrimaryOnly
        }))}
        disabled={disabled}
      />

      <Input
        value={countFrom}
        label="Count from"
        handleChange={
          e => setFilterValues(prev => ({
            ...prev, 
            countFrom: e.target.value
          }))
        }
        type="number"
        name="countFrom"
        disabled={disabled}
      />

      <Input
        value={countTo}
        label="Count to"
        handleChange={
          e => setFilterValues(prev => ({
            ...prev, 
            countTo: e.target.value
          }))
        }
        type="number"
        name="countTo"
        disabled={disabled}
      />

      <Button
        width="width"
        onClick={onApplyFilterValues}
        size="medium"
      >
        Apply Filters
      </Button>

      <Button
        width="width"
        onClick={onCleanFilterValues}
        size="medium"
      >
        Clean Filters
      </Button>
    </>
  )
}

RolesListSidebar.propTypes = {
  filterValues: PropTypes.shape({
    searchValue: PropTypes.string.isRequired,
    isPrimaryOnly: PropTypes.bool.isRequired,
    countFrom: PropTypes.string.isRequired,
    countTo: PropTypes.string.isRequired,
  }).isRequired,
  setFilterValues: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  onApplyFilterValues: PropTypes.func.isRequired,
  onCleanFilterValues: PropTypes.func.isRequired,
}

export default RolesListSidebar
