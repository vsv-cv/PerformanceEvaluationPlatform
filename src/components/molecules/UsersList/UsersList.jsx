import React, { useState, useEffect } from 'react'
import List from '../../atoms/List'
import { useInfiniteQuery, useQuery } from 'react-query'
import { ListWithFilters } from '../../templates/ListWithFilters'
import { Button } from '../../atoms/Button'
import UsersListSidebar from './UsersListSidebar';
import { UsersApi } from './../../api/api';
import { getRows } from './../RolesList/utils';
import { LIST_COLUMNS, DEFAULT_FETCH_PARAMS, USERS_LIST_QUERY_KEY } from './const';

export const UsersList = () => {
    const [roleIds, setRoleIds] = useState([])
    const [stateIds, setStateIds] = useState([])
    const [sortingParams, setSortingParams] = useState({});
    const [fetchParams, setFetchParams] = useState(DEFAULT_FETCH_PARAMS);

    const {
        data,
        refetch,
        isLoading,
        isFetching, } = useQuery(USERS_LIST_QUERY_KEY, () => UsersApi.getUsers(fetchParams, roleIds, stateIds))
    
    useEffect(() => {
        refetch(USERS_LIST_QUERY_KEY)
    }, [refetch, sortingParams])
    
    const applyFilters = () => {
        refetch(USERS_LIST_QUERY_KEY)
    }

    const handleClickOnSort = ({ columnId, type }) => {
        const sortingConfig = {
            'firstName': 'UserName',
            'nextPEDate': 'UserNextPE',
            'previousPEDate': 'UserPreviousPE',
        }
        const sortingType = sortingConfig[columnId];
        setFetchParams(prev => ({
            ...prev,
            [sortingType]: prev[sortingType] === 1 ? 2 : 1,
        }))
        setSortingParams({ columnId, type });
    }

    const listRows = getRows(data?.data);

    return (
        <ListWithFilters
            title="Users"
            button={
                <Button
                    size="large"
                    onClick={() => console.log('Click on add role!')}
                >
                    add role
                </Button>
            }
            list={
                <List
                    columns={LIST_COLUMNS}
                    rows={listRows}
                    //onScrollToGetNewData={fetchNextPage}
                    onSortChange={handleClickOnSort}
                    sortedColumn={sortingParams}
                />
            }
            sidebar={
                <UsersListSidebar
                    fetchParams={fetchParams}
                    setFetchParams={setFetchParams}
                    applyFilters={applyFilters}
                    roleIds={roleIds}
                    setRoleIds={setRoleIds}
                    stateIds={stateIds}
                    setStateIds={setStateIds }
                    isLoading={isFetching}
                    // onCleanFilterValues={handleCleanFilterValues}
                />
            }
        />
    );
}


