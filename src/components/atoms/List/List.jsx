import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { getDataForTable } from './utils';
import descendingSortIcon from '../../../icons/descending-sort.svg';
import ascendingSortIcon from '../../../icons/ascending-sort.svg';
import classes from './styles/index.module.scss';

import { SORT_TYPE_UP, SORT_TYPE_DOWN, SCROLL_HEIGHT_TRIGGER } from './const';

export const List = ({
  columns,
  rows,
  sortedColumn,
  onScrollToGetNewData,
  onSortChange,
  onRowClick,
  hasNextPage = true,
}) => {
  const canFetchMoreOnScrollRef = useRef(true);

  const handleClickOnSort = id => {
    let newSorting = { columnId: id };

    if (sortedColumn.columnId === id) {
      newSorting.type =
        sortedColumn.type === SORT_TYPE_UP ? SORT_TYPE_DOWN : SORT_TYPE_UP;
    } else {
      newSorting.type = SORT_TYPE_UP;
    }

    onSortChange(newSorting);
  };

  const onTableScroll = e => {
    const { clientHeight, scrollHeight, scrollTop } = e.target;

    if (
      canFetchMoreOnScrollRef.current &&
      clientHeight + scrollTop >= scrollHeight - SCROLL_HEIGHT_TRIGGER
    ) {
      canFetchMoreOnScrollRef.current = false;
      onScrollToGetNewData();
    }
  };

  const handleClickOnRow = id => {
    onRowClick && onRowClick(id);
  };

  useEffect(() => {
    canFetchMoreOnScrollRef.current = true;
  }, [rows.length]);

  return (
    <div className={classes.table__container} onScroll={onTableScroll}>
      <table
        className={classes['table']}
        style={{
          gridTemplateColumns:
            'repeat(' + columns.length + ', minmax(auto, auto))',
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
                  onClick={() => handleClickOnSort(id)}
                  title={name}
                >
                  <div className={classes.sort_block}>
                    <span className={classes.sort_text}>{name}</span>

                    {sortedColumn.columnId === id && (
                      <span className={classes.sort_icon}>
                        <img
                          src={
                            sortedColumn.type === SORT_TYPE_UP
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
          {getDataForTable(columns, rows).map(row => {
            return (
              <tr
                className={classes.tr}
                key={row.id}
                onClick={e => handleClickOnRow(row.id, e)}
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
      {hasNextPage && !canFetchMoreOnScrollRef.current && (
        <span>LOADING...</span>
      )}
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
    type: PropTypes.oneOf([SORT_TYPE_UP, SORT_TYPE_DOWN]),
  }),
};

List.defaultProps = {
  columns: [],
  rows: [],
  onScroll: () => {},
};
