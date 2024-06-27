import { redirect } from '@/navigation';

import { replaceDashWithSpace } from './string';

export const findSelectedItem = <T extends { name: string; engName?: string }>(
  items: T[],
  selectedItemName?: string,
  pathname?: string,
) => {
  const defaultItem = items[0];

  if (selectedItemName === undefined) return defaultItem; // 쿼리 없이 기본 주소일 경우

  const selectedName = replaceDashWithSpace(selectedItemName);
  const item = items.find((item) => item.name === selectedName || item.engName === selectedName);

  // 다른 언어로 바뀌거나 존재하지 않는 쿼리가 들어오는 등 알맞은 아이템이 없을 경우 기본 주소로 리다이렉트
  if (!item && pathname) {
    redirect(pathname);
  }

  return item ?? defaultItem;
};
