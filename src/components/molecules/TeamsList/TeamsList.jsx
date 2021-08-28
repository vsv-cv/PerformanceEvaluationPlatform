import React, { useState, useEffect } from 'react'
import List from '../../atoms/List'
import { UsersApi } from '../../../api/api'
import { Button } from '../../atoms/Button'
import TeamsListSidebar from './TeamsListSidebar'
import { useInfiniteQuery, useQuery } from 'react-query'
import { getRows, formatData } from '../UsersList/utils';
import { ListWithFilters } from '../../templates/ListWithFilters'
import {
    CLEAN_PARAMS,
    LIST_COLUMNS,
    DEFAULT_FETCH_PARAMS,
    USERS_LIST_QUERY_KEY,
} from './const';

export const TeamsList = () => {
    const [sortingParams, setSortingParams] = useState({});
    const [fetchParams, setFetchParams] = useState(DEFAULT_FETCH_PARAMS);

    const {
        data,
        refetch,
        isLoading,
        isFetching, } = useInfiniteQuery(USERS_LIST_QUERY_KEY, () => UsersApi.getUsers(fetchParams))
    
    useEffect(() => {
        refetch(USERS_LIST_QUERY_KEY)
    }, [refetch, sortingParams])
    
    const applyFilters = () => {
        refetch(USERS_LIST_QUERY_KEY)
        cleanFilterValues()
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
        setFetchParams(prev => ({
            ...prev,
            [sortingType]: prev[sortingType] === 1 ? 2 : 1,
        }))
        setSortingParams({ columnId, type });
    }

    const formattedData = formatData(data);
    const listRows = getRows(formattedData);

    return (
        <ListWithFilters
            title="Teams list"
            button={
                <Button
                    size="large"
                    onClick={() => console.log('Click on add role!')}
                >
                    add Team
                </Button>
            }
            list={
                <List
                    columns={LIST_COLUMNS}
                    //rows={listRows}
                    //onScrollToGetNewData={fetchNextPage}
                    onSortChange={handleClickOnSort}
                    sortedColumn={sortingParams}
                />
            }
            sidebar={
                <TeamsListSidebar
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


