export const formatDate = date => {
  const utcDate = new Date(date);
  const day = ('0' + (utcDate.getUTCDate() + 1)).slice(-2);
  const month = utcDate.getUTCMonth() + 1;
  const year = utcDate.getUTCFullYear();

  return `${day}.${month}.${year}`;
}

export const formatData = data => {
  if (!data) return;

  const allPages =  data?.pages?.reduce((acc, page) => {
    return acc.concat(page);
  }, []);

  return allPages?.map(item => ({
    ...item, 
    appointmentDate: formatDate(item.appointmentDate)
  }))
};

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
});