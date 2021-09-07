import React, { useState, useEffect } from 'react';
import styles from './list.module.scss';
import PropTypes from 'prop-types';

import descendingSortIcon from '../../../icons/descending-sort.svg';
import ascendingSortIcon from '../../../icons/ascending-sort.svg';
import { getDataForTable } from './tools';

export const sortUp = 'up';
export const sortDown = 'down';

export const List = ({
  columns,
  rows,
  sortedColumn,
  onScrollToGetNewData,
  onSortChange,
  onRowClick,
  hasNextPage = true,
}) => {
  const [isDataLoad, setIsDataLoad] = useState(true);
  useEffect(() => {
    setIsDataLoad(true);
  }, [rows.length]);

  const onClickSort = id => {
    let newSorting = { columnId: id };
    if (sortedColumn.columnId === id) {
      newSorting.type = sortedColumn.type === sortUp ? sortDown : sortUp;
    } else {
      newSorting.type = sortUp;
    }
    onSortChange(newSorting);
  };

  const onTableScroll = e => {
    const { clientHeight, scrollHeight, scrollTop } = e.target;
    const space = 50;
    if (clientHeight + scrollTop >= scrollHeight - space && isDataLoad) {
      setIsDataLoad(false);
      onScrollToGetNewData();
    }
  };

  const rowClick = id => {
    if (onRowClick) {
      onRowClick(id);
    }
  };

  const grid = getDataForTable(columns, rows);

  return (
    <div className={styles.table__container} onScroll={onTableScroll}>
      <table
        className={styles['table']}
        style={{
          gridTemplateColumns:
            'repeat(' + columns.length + ', minmax(100px, auto))',
        }}
      >
        <thead className={styles.thead}>
          <tr className={styles.tr}>
            {columns.map(item => {
              const { id, name, sort } = item;
              return sort ? (
                <th
                  key={id}
                  className={styles.sort_column + ' ' + styles.th}
                  onClick={() => onClickSort(id)}
                >
                  <div className={styles.sort_block}>
                    <span className={styles.sort_text}>{name}</span>
                    {sortedColumn.columnId === id ? (
                      sortedColumn.type === sortUp ? (
                        <span className={styles.sort_icon}>
                          <img src={descendingSortIcon} alt="" />
                        </span>
                      ) : (
                        sortedColumn.type === sortDown && (
                          <span className={styles.sort_icon}>
                            <img src={ascendingSortIcon} alt="" />
                          </span>
                        )
                      )
                    ) : (
                      <span
                        className={
                          styles.sort_icon + ' ' + styles.sort_icon_uncheck
                        }
                      >
                        <img src={ascendingSortIcon} alt="" />
                      </span>
                    )}
                  </div>
                </th>
              ) : (
                <th key={id} className={styles.th}>
                  <span className={styles.theader_text}>{name}</span>
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody className={styles.tbody}>
          {grid.map(row => {
            return (
              <tr
                className={styles.tr}
                key={row.id}
                onClick={e => rowClick(row.id, e)}
              >
                {columns.map(column => {
                  const key = row.id + ' ' + column.id;
                  return (
                    <td className={styles.td} key={key}>
                      {row.items[column.id]}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      {hasNextPage && !isDataLoad && <span>LOADING...</span>}
    </div>
  );
};

List.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      sort: PropTypes.bool,
    })
  ),
  rows: PropTypes.arrayOf(
    PropTypes.shape({
      items: PropTypes.arrayOf(
        PropTypes.shape({
          columnId: PropTypes.string,
          value: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
            PropTypes.element,
          ]),
        })
      ),
      id: PropTypes.string,
    })
  ),
  onScrollToGetNewData: PropTypes.func,
  onSortChange: PropTypes.func,
  sortedColumn: PropTypes.shape({
    columnId: PropTypes.string,
    type: PropTypes.oneOf([sortUp, sortDown]),
  }),
};

List.defaultProps = {
  columns: [],
  rows: [],
  onScroll: () => {},
};
