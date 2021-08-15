export const getRows = rows => rows?.map(row => {
  const items = Object
    .entries(row)
    .map(([key, value]) => {
      return {
        columnId: key,
        value: String(value)
      }
    })
    .filter(item => item.columnId !== 'id');

  return ({
    id: String(row.id),
    items: items
  })
})