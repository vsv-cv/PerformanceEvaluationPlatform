import { formatDate, concatPages } from './../../../utils';

export const formatData = data => {
  
  if (!data) return;

  const allPages = concatPages(data?.pages);

  return allPages?.map(item => ({
    ...item,
    nextPEDate: formatDate(item.nextPEDate),
    previousPEDate: formatDate(item.previousPEDate),
  }));
};

export const getRows = rows =>
  rows?.map(row => {
    const items = Object.entries(row)
      .map(([key, value]) => {
        return {
          columnId: key,
          value: String(value),
        };
      })
      .filter(item => item.columnId !== 'id');

    return {
      id: String(row.id),
      items: items,
    };
  });


