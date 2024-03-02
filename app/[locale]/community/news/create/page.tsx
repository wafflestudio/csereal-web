'use client';

import { revalidateNewsTag } from '@/actions/newsActions';
import { useRouter } from '@/navigation';

import { postNews } from '@/apis/news';

import PostEditor from '@/components/editor/PostEditor';
import { PostEditorContent, isLocalFile, isLocalImage } from '@/components/editor/PostEditorProps';
import PageLayout from '@/components/layout/pageLayout/PageLayout';

import { NEWS_TAGS } from '@/constants/tag';


import { validateNewsForm } from '@/utils/formValidation';
import { getPath } from '@/utils/page';
import { news } from '@/utils/segmentNode';

const newsPath = getPath(news);

export default function NewsCreatePage() {
  const router = useRouter();

  const handleCancel = () => router.push(newsPath);

  const handleComplete = async (content: PostEditorContent) => {
    console.log(content.description);
    validateNewsForm(content);

    const mainImage =
      content.mainImage && isLocalImage(content.mainImage) ? content.mainImage.file : null;

    const attachments = content.attachments.filter(isLocalFile).map((x) => x.file);
    await postNews({
      request: {
        title: content.title,
        titleForMain: content.titleForMain ? content.titleForMain : null,
        description: content.description,
        isPrivate: content.isPrivate,
        isSlide: content.isSlide,
        isImportant: content.isImportant,
        tags: content.tags,
        date: content.date,
      },
      mainImage,
      attachments,
    });

    revalidateNewsTag();
    router.replace(newsPath);
  };

  return (
    <PageLayout title="새 소식 쓰기" titleType="big" titleMargin="mb-[2.25rem]">
      <PostEditor
        tags={NEWS_TAGS}
        showMainImage
        showIsSlide
        showIsImportant
        showDate
        actions={{
          type: 'CREATE',
          onCancel: handleCancel,
          onComplete: handleComplete,
        }}
      />
    </PageLayout>
  );
}
