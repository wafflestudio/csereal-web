import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import { SegmentNode } from './segmentNode';

/**
 * @param node current page node (node.name will be the title of metadata)
 * @param title metadata title (take precedence over node.name)
 * @param description metadata description (using node.name)
 * @returns metadata object with title and description
 */
export const getMetadata = async ({
  node,
  title,
  description,
}: {
  node: SegmentNode;
  title?: string;
  description?: string;
}): Promise<Metadata> => {
  const t = await getTranslations('Nav');

  return {
    title: title || t(node.name),
    description: description || `서울대학교 컴퓨터공학부 ${t(node.name)} 페이지입니다.`,
  };
};
