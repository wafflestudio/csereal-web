import 'dayjs/locale/ko';

import dayjs from 'dayjs';
import { useLocale } from 'next-intl';

type FormatType = 'simple' | 'day' | 'time';
type DayjsParams = { date: string | Date; format: FormatType };

const FORMAT_MAP: Record<FormatType, Record<'ko' | 'en', string>> = {
  simple: {
    ko: 'YYYY/M/DD',
    en: 'YYYY/M/DD',
  },
  day: {
    ko: 'YYYY/M/DD (ddd)',
    en: 'YYYY/M/DD ddd',
  },
  time: {
    ko: 'YYYY/M/DD (ddd) A hh:mm',
    en: 'YYYY/M/DD ddd hh:mm A',
  },
};

export const useDayjs = () => {
  const locale = useLocale();

  if (!(locale === 'ko') && !(locale === 'en')) return;

  return ({ date, format }: DayjsParams) => {
    const dayjsInstance = dayjs(date).locale(locale);

    return dayjsInstance.format(FORMAT_MAP[format][locale]);
  };
};
