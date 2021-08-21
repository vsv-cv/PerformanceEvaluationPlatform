import React, { useState, useEffect } from 'react'
import { Input } from '../../atoms/Input/Input'
import { Button, ButtonTheme } from '../../atoms/Button'


const UsersListSidebar = () => {

    return (
        <>
            <Input
                // value={filterInputValues.search}
                label="Search by title"
                type="search"
                name="search"
                // disabled={isLoading}
            />
            {/* <Dropdown
            />
            <Dropdown   
            /> */}
            <Button
                fullwidth
                theme={ButtonTheme.SUCCESS}
                size="small"
                // disabled={isLoading}
            >
                Apply Filters
            </Button>
            <Button
                fullwidth
                // theme={ButtonTheme.SECONDARY}
                size="small"
                // disabled={isLoading}
            >
                Clean Filters
            </Button>

        </>
    )
}

export default UsersListSidebar
