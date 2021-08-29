import { concatPages } from '../../../utils';

export const formatData = data => {
  if (!data) return;

  const allPages = concatPages(data?.pages);
  return allPages?.map(item => ({
    ...item,
    isRequired: item.isRequired ? 'yes' : 'no',
  }));
};
