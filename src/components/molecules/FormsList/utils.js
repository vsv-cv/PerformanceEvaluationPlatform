import { concatPages, formatDate } from '../../../utils';

export const formatData = data => {
  if (!data) return;

  const allPages = concatPages(data?.pages);

  return allPages?.map(item => ({
    ...item,
    appointmentDate: formatDate(item.appointmentDate),
  }));
};

export const getAssignees = data => {
  return data?.reduce((acc, currentValue) => {
    if (!acc.some(item => item.key === currentValue.assigneeId)) {
      return [
        ...acc,
        { key: currentValue.assigneeId, text: currentValue.assignee },
      ];
    }

    return acc;
  }, []);
};

export const getSupervisors = data => {
  return data?.reduce((acc, currentValue) => {
    if (!acc.some(item => item.key === currentValue.supervisorId)) {
      return [
        ...acc,
        { key: currentValue.supervisorId, text: currentValue.supervisor },
      ];
    }

    return acc;
  }, []);
};
