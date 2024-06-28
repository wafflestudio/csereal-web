import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import { NavTreeNode } from '../constants/navTreeNode';

/**
 * @param locale (required) current page locale (get from page params)
 * @param node current page node (node.name will be the title of metadata)
 * @param metadata customized metadata
 * @returns metadata object with title and description
 */
export const getMetadata = async ({
  locale,
  node,
  metadata, // 이것저것 더 추가할 때를 대비해서 한번에 받는 옵션 넣어둠
}: {
  locale: string;
  node?: NavTreeNode;
  metadata?: Metadata;
}): Promise<Metadata> => {
  const t = await getTranslations({ locale, namespace: 'Nav' });

  return {
    ...metadata,
    title: metadata?.title || (node ? t(node.name) : undefined),
    description:
      metadata?.description ||
      (node ? `서울대학교 컴퓨터공학부 ${node.name} 페이지입니다.` : undefined),
  };
};
