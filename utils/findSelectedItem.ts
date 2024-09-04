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
  // TODO: 리다이렉트 말고 fallback 보여주기
  if (!item && fallbackPathname) {
    redirect(fallbackPathname);
  }

  return item ?? defaultItem;
};

// 영어 데이터 처리로 인해 백엔드 응답 타입이 바뀜.
// 추후 백엔드 작업 전부 완료될 시 v2로 통일
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
