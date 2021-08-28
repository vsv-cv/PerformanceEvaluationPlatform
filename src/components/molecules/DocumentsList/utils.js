import { concatPages, formatDate } from '../../../utils';
import { Button, ButtonType } from '../../atoms/Button';
import downloadIcon from '../../../icons/download.svg';

export const formatData = data => {
  if (!data) return;

  const allPages = concatPages(data?.pages);
  return allPages?.map(item => ({
    ...item,
    validToDate: formatDate(item?.validToDate),
    userName: item?.firstName + ' ' + item?.lastName,
    download: <Button type={ButtonType.BUTTON} icon={downloadIcon} />,
  }));
};
