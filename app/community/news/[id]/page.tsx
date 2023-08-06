import { writer } from 'repl';

import next from 'next';

import AdjPostNav from '@/components/common/AdjPostNav';
import HTMLViewer, { htmlMock1 } from '@/components/common/HTMLViewer';
import { StraightNode } from '@/components/common/Nodes';
import Tags from '@/components/common/Tags';
import PageLayout from '@/components/layout/PageLayout';

import { news } from '@/types/page';

import { formatDate } from '@/utils/formatting';

export default function NewsPostPage() {
  return (
    <PageLayout
      currentPage={news}
      title="2023학년도 2학기 푸른등대 기부장학사업 신규장학생 선발 안내"
      titleSize="text-lg"
    >
      {/* <AdjPostNav prevPost={prev} nextPost={next} href={listPathWithQuery} margin="mt-12" /> */}
    </PageLayout>
  );
}
