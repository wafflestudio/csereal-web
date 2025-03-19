import dayjs from 'dayjs';
import { useLocale } from 'next-intl';

export const useDayjs = () => {
  const locale = useLocale();

  return (date: string | Date) => dayjs(date).locale(locale);
};
