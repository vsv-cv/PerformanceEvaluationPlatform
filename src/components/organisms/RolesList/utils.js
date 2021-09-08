import { concatPages } from '../../../utils';

export const formatData = data => {
  if (!data) return;

  const allPages = concatPages(data?.pages);

  return allPages?.map(item => ({
    ...item,
    isPrimary: item?.isPrimary ? 'yes' : 'no',
  }));
};
