import React, { useState } from 'react'
import { Button } from '../../atoms/Button'
import UsersListSidebar from './UsersListSidebar';
import { ListWithFilters } from '../../templates/ListWithFilters'
import { NewList } from './../../atoms/NewList';
import {
    USER_URL,
    SORT_USERS_PARAMS,
    USERS_LIST_COLUMNS,
    DEFAULT_FETCH_PARAMS,
    SORT_USERS_FETCH_PARAMS,
} from './const';

export const UsersList = () => {
    const [fetchParams, setFetchParams] = useState(DEFAULT_FETCH_PARAMS);
    const [aplyFilterFetchData, setAplyFilterFetchData] = useState(false)

    const onRowClick = (id) => {
        console.log(id)
    }

    return (
        <>
            <ListWithFilters
                title="Users list"
                button={
                    <Button
                        size="large"
                        onClick={() => console.log('Click on add role!')}
                    >
                        add role
                    </Button>
                }
                list={
                    <NewList
                        url={USER_URL}
                        columns={USERS_LIST_COLUMNS}
                        SORT_USERS_PARAMS={SORT_USERS_PARAMS}
                        SORT_USERS_FETCH_PARAMS={SORT_USERS_FETCH_PARAMS}
                        onRowClick={onRowClick}
                        fetchParams={fetchParams}
                        setFetchParams={setFetchParams}
                        aplyFilterFetchData={aplyFilterFetchData}
                        setAplyFilterFetchData={setAplyFilterFetchData}
                    />
                }
                sidebar={
                    <UsersListSidebar
                        fetchParams={fetchParams}
                        setFetchParams={setFetchParams}
                        setFetchData={setAplyFilterFetchData}
                    />
                }
            />
        </>
    );
}


