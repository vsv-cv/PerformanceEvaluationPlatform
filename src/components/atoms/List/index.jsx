import React from 'react'
import styles from './list.module.scss'
import PropTypes from 'prop-types'

export default function List({
  columns,
  rows,
  onScroll
}) {
  let grid = [];
  for (let i = 0; i < rows.length; i++) {
    grid[i] = {};
    grid[i].items = {};
    grid[i].id = rows[i].id
    for (let j = 0; j < columns.length; j++) {
      grid[i].items[columns[j].id] = '';
    }
  }
  let rowIndex = 0;
  rows.forEach(row => {
    row.items.forEach(gridEl => {
      grid[rowIndex].items[gridEl.columnId] = gridEl.value;
    });
    rowIndex++;
  });
  // console.log(grid);
  return (
    <div className={styles.table_responsive} onScroll={(e) => onScroll(e.target.scrollHeight, e.target.scrollTop)}>
      <table className={styles['table'] + " " + styles['table-hover']}>
        <thead className={styles['table-primary-1']}>
          <tr>
            {columns.map(item => {
              const {id, name, sort} = item;
              return (
                <th key={id}>
                  {sort ? (
                    <div style={{cursor: 'pointer'}}>
                      <span>{name}</span>
                    </div>
                  ) : (
                    <div>
                      {name}
                    </div>
                  )}
                  
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {
            grid.map(row => {
              return (
                <tr key={row.id}>
                  {columns.map(column => {
                    return (
                      <td key={row.id + " " + row.items[column.id]}>{row.items[column.id]}</td>
                    );
                  })}
                </tr>
              );
            })
          }
				</tbody>
      </table>
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
  onScroll: PropTypes.func
}

List.defaultProps = {
  columns: [],
  rows: [],
  onScroll: () => {}
}