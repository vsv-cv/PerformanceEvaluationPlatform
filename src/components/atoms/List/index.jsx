import React, {useState, useEffect} from 'react'
import styles from './list.module.scss'
import PropTypes from 'prop-types'

import descendingSortIcon from './descending-sort.svg'
import ascendingSortIcon from './ascending-sort.svg'
import { getDataForTable } from './tools'

export const sortUp = 'up';
export const sortDown = 'down';

export default function List({
  columns,
  rows,
  sortedColumn,
  onScrollToGetNewData,
  onSortChange,
  onRowClick
}) {
  const [isDataLoad, setIsDataLoad] = useState(true);
  useEffect(() => {
    setIsDataLoad(true);
  }, [rows.length]);

  const onClickSort = id => {
    let newSorting = {columnId: id};
    if(sortedColumn.columnId === id){
      newSorting.type = sortedColumn.type === sortUp ? sortDown : sortUp;
    }
    else{
      newSorting.type = sortUp;
    }
    onSortChange(newSorting);
  }

  const onTableScroll = (e) => {
    const {clientHeight, scrollHeight, scrollTop} = e.target;
    const space = 50;
    if((clientHeight + scrollTop >= scrollHeight - space) && isDataLoad){
      setIsDataLoad(false);
      onScrollToGetNewData()
    }
  }

  const rowClick = (id) => {
    if(onRowClick){
      onRowClick(id);
    }
  }

  const grid = getDataForTable(columns, rows);

  return (
    <div className={styles.table__container} onScroll={onTableScroll}>
      <table className={styles['table']} style={{gridTemplateColumns: 'repeat(' + columns.length + ', minmax(100px, auto))'}}>
        <thead>
          <tr>
            {columns.map(item => {
              const {id, name, sort} = item;
              return sort ? (
                <th key={id} className={styles.sort_column} onClick={() => onClickSort(id)}>
                  <span>{name}</span>
                  {sortedColumn.columnId === id ? (
                    sortedColumn.type === sortUp ? (
                      <span className={styles.sort_icon}>
                        <img src={descendingSortIcon} alt="" />
                      </span>
                    ) :
                    sortedColumn.type === sortDown && (
                      <span className={styles.sort_icon}>
                        <img src={ascendingSortIcon} alt="" />
                      </span>
                    )
                  ) : (
                    <span className={styles.sort_icon + ' ' + styles.sort_icon_uncheck}>
                      <img src={ascendingSortIcon} alt="" />
                    </span>
                  )}
                </th>
              ) : (
                <th key={id}>
                  <span>{name}</span>
                </th>
              )
            })}
          </tr>
        </thead>
        <tbody>
          {
            grid.map(row => {
              return (
                <tr key={row.id} onClick={(e) => rowClick(row.id, e)}>
                  {columns.map(column => {
                    const key = row.id + " " + column.id;
                    return (
                      <td key={key}>{row.items[column.id]}</td>
                    );
                  })}
                </tr>
              );
            })
          }
				</tbody>
      </table>
      {!isDataLoad && (<span>LOADING...</span>)}
    </div>
  )
}

List.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    sort: PropTypes.bool
  })),
  rows: PropTypes.arrayOf(PropTypes.shape({
    items: PropTypes.arrayOf(PropTypes.shape({
      columnId: PropTypes.string,
      value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.element
      ])
    })),
    id: PropTypes.string
  })),
  onScrollToGetNewData: PropTypes.func,
  onSortChange: PropTypes.func,
  sortedColumn: PropTypes.shape({
    columnId: PropTypes.string,
    type: PropTypes.oneOf([sortUp, sortDown])
  })
}

List.defaultProps = {
  columns: [],
  rows: [],
  onScroll: () => {}
}