import dayjs from 'dayjs';
import { useLocale } from 'next-intl';

export const useDayjs = ({ date }: { date: string | Date }) => {
  const locale = useLocale();

  return dayjs(date).locale(locale);
};
