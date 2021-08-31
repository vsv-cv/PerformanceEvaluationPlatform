import React, { useState, useCallback } from 'react'
import List from '../../atoms/List'
import { UsersApi } from '../../../api/api';
import { Button } from '../../atoms/Button'
import UsersListSidebar from './UsersListSidebar';
import { getSortingParam } from './../../../utils';
import { useInfiniteQuery } from 'react-query'
import { getRows, formatData } from './../UsersList/utils';
import { ListWithFilters } from '../../templates/ListWithFilters'
import {
    CLEAN_PARAMS,
    LIST_COLUMNS,
    DEFAULT_FETCH_PARAMS,
    USERS_LIST_QUERY_KEY,
} from './const';

export const UsersList = () => {
    const [fetchParams, setFetchParams] = useState(DEFAULT_FETCH_PARAMS);
    const [sortingParams, setSortingParams] = useState({
        columnId: 'formName',
        type: 'up',
    });

    const {
        data,
        refetch,
        isFetching, } = useInfiniteQuery(USERS_LIST_QUERY_KEY, () => UsersApi.getUsersList(fetchParams))
    
    const formattedData = formatData(data);
    const listRows = getRows(formattedData);
    
    const refetchData = useCallback(() => {
        refetch(USERS_LIST_QUERY_KEY)
    }, [refetch]);

    const handleClickOnSort = sortingConfig => {
        setFetchParams(prev => ({
            ...prev,
            UserName: getSortingParam(sortingConfig, 'firstName'),
            UserNextPE: getSortingParam(sortingConfig, 'nextPEDate'),
            UserPreviousPE: getSortingParam(sortingConfig, 'previousPEDate'),
        }));
        setSortingParams(sortingConfig);
        setTimeout(refetchData);
    };

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
                rows={listRows}
                    columns={LIST_COLUMNS}
                    sortedColumn={sortingParams}
                    onSortChange={handleClickOnSort}
                    //onScrollToGetNewData={fetchNextPage}
                />
            }
            sidebar={
                <UsersListSidebar
                    fetchParams={fetchParams}
                    setFetchParams={setFetchParams}
                    refetchData={refetchData}
                    isLoading={isFetching}
                />
            }
        />
    );
}


