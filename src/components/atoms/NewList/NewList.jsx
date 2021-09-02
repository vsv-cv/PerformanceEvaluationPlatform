import React, { useRef, useMemo, useState, useEffect } from 'react';
import styles from './list.module.scss';

import { Row } from './Row';
import { TableHead } from './TableHead';
import { useFetch } from './../../../hooks/useFetch';

export const NewList = ({
  url,
  columns,
  onRowClick,
  fetchParams,
  setFetchParams,
  SORT_USERS_PARAMS,
  SORT_USERS_FETCH_PARAMS,
  aplyFilterFetchData,
  setAplyFilterFetchData,
}) => {
  
  const [fetching, setFetching] = useState(false)
  const [sortedRow, setSortedRow] = useState(SORT_USERS_PARAMS)
  const { data, fetchingData, getNextPage } = useFetch(url, fetchParams)
  const bottomTablet = useRef()

  useEffect(() => {
    aplyFilterFetchData && fetchingData(url, fetchParams)
    setAplyFilterFetchData(false)
  }, [aplyFilterFetchData])

  useEffect(() => {
    fetchingData(url, fetchParams)
  }, [sortedRow])

  useEffect(() => {
    fetching && getNextPage( url, fetchParams)
    setFetching(false)
  }, [fetching])

  useEffect(() => {
    document.addEventListener('scroll', scrolHanler)
    return () => {
      document.removeEventListener('scroll', scrolHanler)
    }
  }, [])

  const scrolHanler = (e) => {
    if (e.target.documentElement.scrollHeight -
      (e.target.documentElement.scrollTop + window.innerHeight) < 1) {
      console.log('scrol')
      setFetching(true)
    }
    // const { scrollTop, scrollHeight, clientHeight } = bottomTablet.current;
    // if (scrollTop + clientHeight === (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 1)) {
    //   console.log('Reached bottom')
    // }
  }

  const onClickSort = id => {
    const curentSort = SORT_USERS_FETCH_PARAMS[id]
    setSortedRow({
      ...sortedRow,
      [id]: sortedRow[id] === 1 ? 2 : 1
    })
    setFetchParams(prev => {
      return Object.keys(prev).reduce((memo, item) => {
        if (item === curentSort) {
          memo[curentSort] = sortedRow[id]
        } else if (Object.keys(SORT_USERS_FETCH_PARAMS)
          .find(key => SORT_USERS_FETCH_PARAMS[key] === item)) {
          memo[item] = null
        } else {
          memo[item] = prev[item]
        } return memo
      }, {})
    })
  };

  const rowClick = id => {
    onRowClick && onRowClick(id)
  };

  let ID = () => {
    return '_' + Math.random().toString(36).substr(2, 9);
  };

  return (
    <div className={styles.table__container} ref={bottomTablet}>
      <table
        className={styles['table']}
        style={{
          gridTemplateColumns:
            'repeat(' + columns.length + ', minmax(100px, auto))',
        }}
      >
        <thead>
          <tr>
            {columns.map(column => <TableHead
              key={ID()}
              column={column}
              sortedRow={sortedRow}
              onClickSort={onClickSort}
            />)}
          </tr>
        </thead>

        <tbody>
          {data?.map(row => <Row
            row={row}
            key={row.id}
            columns={columns}
            rowClick={rowClick}
          />)}
        </tbody>
      </table>

    </div>
  );
}


