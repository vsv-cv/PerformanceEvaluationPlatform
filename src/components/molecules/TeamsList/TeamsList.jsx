import React, { useState, useEffect } from 'react'
import List from '../../atoms/List'
import { TeamsApi } from '../../../api/api'
import { Button } from '../../atoms/Button'
import { useInfiniteQuery } from 'react-query'
import TeamsListSidebar from './TeamsListSidebar'
import { getSortingParam } from './../../../utils';
import { getRows, formatData } from '../UsersList/utils';
import { ListWithFilters } from '../../templates/ListWithFilters'
import {
    LIST_COLUMNS,
    CLEAN_PARAMS,
    DEFAULT_FETCH_PARAMS,
    USERS_LIST_QUERY_KEY,
} from './const';

export const TeamsList = () => {
    const [fetchParams, setFetchParams] = useState(DEFAULT_FETCH_PARAMS);
    const [sortingParams, setSortingParams] = useState({
        columnId: 'formName',
        type: 'up',
    });

    const {
        data,
        refetch,
        isFetching, } = useInfiniteQuery(USERS_LIST_QUERY_KEY, () => TeamsApi.getTeamsList(fetchParams))
    
    useEffect(() => {
        refetch(USERS_LIST_QUERY_KEY)
    }, [refetch])

    const formattedData = formatData(data);
    const listRows = getRows(formattedData);
    
    const applyFilters = () => {
        refetch(USERS_LIST_QUERY_KEY)
        cleanFilterValues()
    }

    const cleanFilterValues = () => {
        setFetchParams(CLEAN_PARAMS)
    }

    const handleClickOnSort = sortingConfig => {
        setFetchParams(prev => ({
            ...prev,
            OrderByTeamTitle: getSortingParam(sortingConfig, 'title'),
            OrderByProjectTitle: getSortingParam(sortingConfig, 'projectTitle'),
            OrderByTeamSize: getSortingParam(sortingConfig, 'size'),
        }));
        setSortingParams(sortingConfig);
        setTimeout(applyFilters);
    };

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
                    rows={listRows}
                    onSortChange={handleClickOnSort}
                    sortedColumn={sortingParams}
                    //onScrollToGetNewData={fetchNextPage}
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


