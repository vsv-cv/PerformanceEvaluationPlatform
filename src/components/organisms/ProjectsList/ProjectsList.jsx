import React from 'react';
import { LIST_COLUMNS } from './const';
import { ListTemplate } from '../../templates/ListTemplate';
import { Button } from '../../atoms/Button';
import List from '../../atoms/List';
import { ProjectsListSidebar } from './ProjectsListSidebar';
import { useProjectsList } from './hooks/useProjectsList.js';

export const ProjectsList = () => {
  const {
    rows,
    isLoading,
    isFetching,
    refetch,
    fetchNextPage,
    hasNextPage,
    fetchParams,
    setFetchParams,
    sortingParams,
    handleClickOnSort,
  } = useProjectsList();

  return isLoading ? (
    'Loading...'
  ) : (
    <ListTemplate
      title="Projects"
      button={
        <Button
          size="medium"
          onClick={() => console.log('Click on add project!')}
        >
          add project
        </Button>
      }
      list={
        <List
          columns={LIST_COLUMNS}
          rows={rows}
          onScrollToGetNewData={fetchNextPage}
          onSortChange={handleClickOnSort}
          sortedColumn={sortingParams}
          hasNextPage={hasNextPage}
        />
      }
      sidebar={
        <ProjectsListSidebar
          fetchParams={fetchParams}
          setFetchParams={setFetchParams}
          isLoading={isLoading || isFetching}
          refetch={refetch}
        />
      }
    />
  );
};
