import React, { useState, useEffect } from 'react';
import classes from './list.module.scss';
import PropTypes from 'prop-types';

import descendingSortIcon from '../../../icons/descending-sort.svg';
import ascendingSortIcon from '../../../icons/ascending-sort.svg';
import { getDataForTable } from './tools';
import classNames from 'classnames';

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

  useEffect(() => {
    setIsDataLoad(true);
  }, [rows.length]);

  return (
    <div className={classes.table__container} onScroll={onTableScroll}>
      <table
        className={classes['table']}
        style={{
          gridTemplateColumns:
            'repeat(' + columns.length + ', minmax(100px, auto))',
        }}
      >
        <thead className={classes.thead}>
          <tr className={classes.tr}>
            {columns.map(item => {
              const { id, name, sort } = item;
              return sort ? (
                <th
                  key={id}
                  className={classes.sort_column + ' ' + classes.th}
                  onClick={() => onClickSort(id)}
                >
                  <div className={classes.sort_block}>
                    <span className={classes.sort_text}>{name}</span>

                    {sortedColumn.columnId === id && (
                      <span className={classes.sort_icon}>
                        <img
                          src={
                            sortedColumn.type === sortUp
                              ? descendingSortIcon
                              : ascendingSortIcon
                          }
                          alt=""
                        />
                      </span>
                    )}

                    {sortedColumn.columnId !== id && (
                      <span
                        className={classNames(
                          classes.sort_icon,
                          classes.sort_icon_uncheck
                        )}
                      >
                        <img src={descendingSortIcon} alt="" />
                      </span>
                    )}
                  </div>
                </th>
              ) : (
                <th key={id} className={classes.th}>
                  <span className={classes.theader_text}>{name}</span>
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody className={classes.tbody}>
          {grid.map(row => {
            return (
              <tr
                className={classes.tr}
                key={row.id}
                onClick={e => rowClick(row.id, e)}
              >
                {columns.map(column => {
                  const key = row.id + ' ' + column.id;
                  return (
                    <td className={classes.td} key={key}>
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
