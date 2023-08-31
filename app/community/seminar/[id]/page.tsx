import Image from 'next/image';
import Link from 'next/link';

import { getSeminarPost } from '@/apis/seminar';

import AdjPostNav from '@/components/common/AdjPostNav';
import Attachments from '@/components/common/Attachments';
import { StraightNode } from '@/components/common/Nodes';
import PageLayout from '@/components/layout/pageLayout/PageLayout';

import { seminar } from '@/types/page';
import { PostSearchQueryParams } from '@/types/post';

import { getAdjPostsInfo } from '@/utils/getAdjPostInfo';
import { getPath } from '@/utils/page';

interface SeminarPostPageProps {
  params: { id: string };
  searchParams: PostSearchQueryParams;
}

const seminarPath = getPath(seminar);

export default async function SeminarPostPage({ params, searchParams }: SeminarPostPageProps) {
  const currPost = await getSeminarPost(parseInt(params.id), searchParams);
  const { prevPostPreview, nextPostPreview, listPathWithQuery } = getAdjPostsInfo(
    currPost,
    searchParams,
    seminarPath,
  );

  return (
    currPost && (
      <PageLayout title={currPost.title} titleType="small" titleMargin="mb-5">
        <div className="mb-9 text-sm font-yoon text-neutral-700 leading-[1.63rem] flow-root break-all">
          <Attachments files={[]} />
          <div className="relative float-right ml-7 mt-4 mb-7 w-60 h-60">
            <Image
              src={currPost.imageURL ?? undefined}
              alt="대표 이미지"
              priority
              fill
              className="object-cover"
              sizes="240px"
            />
          </div>
          <div>
            이름:{' '}
            {currPost.speakerUrl ? (
              <Link className="text-link hover:underline" href={currPost.speakerUrl}>
                {currPost.name}
              </Link>
            ) : (
              <p>{currPost.name}</p>
            )}
          </div>

          {currPost.speakerTitle && <p>직함: {currPost.speakerTitle}</p>}

          <div>
            소속:{' '}
            {currPost.affiliationUrl ? (
              <Link className="text-link hover:underline" href={currPost.affiliationUrl}>
                {currPost.affiliation}
              </Link>
            ) : (
              <p>{currPost.affiliation}</p>
            )}
          </div>

          <div className="mt-10">주최: {currPost.host}</div>
          <div>
            일시: {currPost.startDate} {currPost.startTime} - {currPost.endDate} {currPost.endTime}
          </div>
          <div>장소: {currPost.location}</div>

          <div className="font-bold  mt-12">요약</div>
          <div>{currPost.description}</div>
          <div className="font-bold  mt-12">연사 소개</div>
          <div>{currPost.introduction}</div>
        </div>
        <StraightNode />
        <AdjPostNav
          prevPost={prevPostPreview}
          nextPost={nextPostPreview}
          href={listPathWithQuery}
          margin="mt-12"
        />
      </PageLayout>
    )
  );
}
