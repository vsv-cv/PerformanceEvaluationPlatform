import React, { useState, useEffect } from 'react'
import List from '../../atoms/List'
import { UsersApi } from '../../../api/api';
import { Button } from '../../atoms/Button'
import UsersListSidebar from './UsersListSidebar';
import { useInfiniteQuery, useQuery } from 'react-query'
import { getRows, formatData } from './../UsersList/utils';
import { ListWithFilters } from '../../templates/ListWithFilters'
import {
    CLEAN_PARAMS,
    LIST_COLUMNS,
    SORTING_PARAMS,
    DEFAULT_FETCH_PARAMS,
    USERS_LIST_QUERY_KEY,
} from './const';

export const UsersList = () => {
    const [sortingParams, setSortingParams] = useState(SORTING_PARAMS);
    const [sortingListParams, setSortingListParams] = useState({});
    const [fetchParams, setFetchParams] = useState(DEFAULT_FETCH_PARAMS);

    const {
        data,
        refetch,
        isLoading,
        isFetching, } = useInfiniteQuery(USERS_LIST_QUERY_KEY, () => UsersApi.getUsers(fetchParams))
    
    useEffect(() => {
        refetch(USERS_LIST_QUERY_KEY)
        setFetchParams(prev => ({
            ...prev,
            UserName: null,
            UserNextPE: null,
            UserPreviousPE: null,
        }))
    }, [refetch, sortingParams])
    
    const applyFilters = () => {
        refetch(USERS_LIST_QUERY_KEY)
        setFetchParams(CLEAN_PARAMS)
    }

    const cleanFilterValues = () => {
        setFetchParams(CLEAN_PARAMS)
    }

    const handleClickOnSort = ({ columnId, type }) => {
        const sortingConfig = {
            'firstName': 'UserName',
            'nextPEDate': 'UserNextPE',
            'previousPEDate': 'UserPreviousPE',
        }
        const sortingType = sortingConfig[columnId];
        setSortingParams(prev => ({
            ...prev,
            [sortingType]: prev[sortingType] === 1 ? 2 : 1,
        }))
        setSortingListParams({ columnId, type });
        setFetchParams(prev => ({
            ...prev,
            [sortingType]: sortingParams[sortingType],
        }))
    }

    const formattedData = formatData(data);
    const listRows = getRows(formattedData);

    return (
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
                <List
                    columns={LIST_COLUMNS}
                    rows={listRows}
                    //onScrollToGetNewData={fetchNextPage}
                    onSortChange={handleClickOnSort}
                    sortedColumn={sortingListParams}
                />
            }
            sidebar={
                <UsersListSidebar
                    fetchParams={fetchParams}
                    setFetchParams={setFetchParams}
                    applyFilters={applyFilters}
                    isLoading={isFetching}
                    cleanFilterValues={cleanFilterValues}
                />
            }
        />
    );
}


