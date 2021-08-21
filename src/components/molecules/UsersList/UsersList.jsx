import React from 'react'
import List from '../../atoms/List'
import { ListWithFilters } from '../../templates/ListWithFilters'
import { Button } from '../../atoms/Button'
import UsersListSidebar from './UsersListSidebar';
import { LIST_COLUMNS } from './const';

export const UsersList = () => {
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
                    // rows={listRows}
                    // onScrollToGetNewData={fetchNextPage}
                    // onSortChange={handleClickOnSort}
                    sortedColumn={{
                        columnId: 'title',
                        type: 'up'
                    }}
                />
            }
            sidebar={
                <UsersListSidebar
                    // fetchParams={fetchParams}
                    // setFetchParams={setFetchParams}
                    // isLoading={isFetching}
                    // onCleanFilterValues={handleCleanFilterValues}
                />
            }
        />
    );
}


