export const getDataForTable = (columns, rows) => {
  let grid = [];
  for (let i = 0; i < rows.length; i++) {
    grid[i] = {};
    grid[i].items = {};
    grid[i].id = rows[i].id
    for (let j = 0; j < columns.length; j++) {
      grid[i].items[columns[j].id] = '';
    }
  }

  rows.forEach((row, index) => {
    row.items.forEach(gridEl => {
      grid[index].items[gridEl.columnId] = gridEl.value;
    });
  });

  return grid;
}