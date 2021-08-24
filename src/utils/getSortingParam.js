export const getSortingParam = ({ columnId, type }, currentColumnId) => {
  if (columnId === currentColumnId && type === 'up') {
    return 1;
  } else if (columnId === currentColumnId && type === 'down') {
    return 2;
  }
  return null;
};
