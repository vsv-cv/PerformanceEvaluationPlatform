import { concatPages } from '../../../utils';

export const formatData = data => {
  if (!data) return;

  return concatPages(data?.pages);
};