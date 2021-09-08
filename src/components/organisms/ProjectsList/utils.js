import { concatPages, formatDate } from '../../../utils';

export const formatData = data => {
  
  if (!data) return;

  const allPages = concatPages(data?.pages);

  return allPages?.map(item => ({
    ...item,
    appointmentDate: formatDate(item.appointmentDate),
  }));
};
