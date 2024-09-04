import { redirect } from '@/navigation';
import { WithLanguage } from '@/types/language';

import { replaceDashWithSpace } from './string';

export const findSelectedItem = <T extends { name: string; engName?: string }>(
  items: T[],
  selectedItemName?: string,
  fallbackPathname?: string,
) => {
  const defaultItem = items[0];

  if (selectedItemName === undefined) return defaultItem; // 쿼리 없이 기본 주소일 경우

  const selectedName = replaceDashWithSpace(selectedItemName);
  const item = items.find(
    (item) =>
      replaceDashWithSpace(item.name) === selectedName ||
      (item.engName && replaceDashWithSpace(item.engName)) === selectedName,
  ); // Human-Centered Computing 같은 코너 케이스가 있으므로 기존 이름도 dash 전부 제거하고 비교

  // 다른 언어로 바뀌거나 존재하지 않는 쿼리가 들어오는 등 알맞은 아이템이 없을 경우 기본 주소로 리다이렉트
  if (!item && fallbackPathname) {
    redirect(fallbackPathname);
  }

  return item ?? defaultItem;
};

export const findSelectedItemV2 = <T extends WithLanguage<{ name: string }>>(
  items: T[],
  selectedItemName?: string,
  fallbackPathname?: string,
) => {
  const defaultItem = items[0];

  if (selectedItemName === undefined) return defaultItem; // 쿼리 없이 기본 주소일 경우

  const selectedName = replaceDashWithSpace(selectedItemName);
  const item = items.find(
    (item) =>
      replaceDashWithSpace(item.ko.name) === selectedName ||
      (item.en.name && replaceDashWithSpace(item.en.name)) === selectedName,
  ); // Human-Centered Computing 같은 코너 케이스가 있으므로 기존 이름도 dash 전부 제거하고 비교

  // 다른 언어로 바뀌거나 존재하지 않는 쿼리가 들어오는 등 알맞은 아이템이 없을 경우 기본 주소로 리다이렉트
  if (!item && fallbackPathname) {
    redirect(fallbackPathname);
  }

  return item ?? defaultItem;
};
