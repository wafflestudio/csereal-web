import dayjs from 'dayjs';
import { useLocale } from 'next-intl';

export const useDayjs = ({ date }: { date: string }) => {
  const locale = useLocale();

  return dayjs(date).locale(locale);
};
