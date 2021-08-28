export const formatDate = date => {
  const utcDate = new Date(date);
  const day = ('0' + (utcDate.getUTCDate() + 1)).slice(-2);
  const month = ('0' + (utcDate.getUTCMonth() + 1)).slice(-2);
  const year = utcDate.getUTCFullYear();

  return `${day}.${month}.${year}`;
};
