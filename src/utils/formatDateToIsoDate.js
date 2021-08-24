export const formatDateToIsoDate = date => {
  return new Date(new Date(date).toString().split('GMT')[0] + ' UTC')
    .toISOString()
    .split('.')[0];
};
