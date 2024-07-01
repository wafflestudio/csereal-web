import { Link } from '@/navigation';

import { News } from '@/types/news';
import { Notice } from '@/types/notice';
import { Seminar } from '@/types/seminar';

import PaginatedLink from './PaginatedLink';
import PostDeleteButton from './PostDeleteButton';
import LoginVisible from '../common/LoginVisible';

type PostFooterProps = {
  postType: PostType;
  post: Notice | News | Seminar;
  id?: string;
  margin?: string;
};

type AdjPost = {
  id: number;
  title: string;
};

type PostType = 'notice' | 'seminar' | 'news';
type RowType = 'next' | 'prev';

export default function PostFooter({ post, margin = '', postType, id }: PostFooterProps) {
  const nextPost =
    post.nextId && post.nextTitle ? { id: post.nextId, title: post.nextTitle } : null;
  const prevPost =
    post.prevId && post.prevTitle ? { id: post.prevId, title: post.prevTitle } : null;

  return (
    <div className={`flex flex-col ${margin}`}>
      {nextPost && <Row post={nextPost} type="next" postType={postType} />}
      {prevPost && <Row post={prevPost} type="prev" postType={postType} />}
      <div className="mt-16 flex justify-end">
        <LoginVisible staff>
          {id && (
            <>
              <PostDeleteButton postType={postType} id={id} />
              <PostEditLink href={`/community/${postType}/${id}/edit`} />
            </>
          )}
        </LoginVisible>
        <PostListLink href={`/community/${postType}`} />
      </div>
    </div>
  );
}

function Row({ post, type, postType }: { post: AdjPost; type: RowType; postType: PostType }) {
  return (
    <Link
      className="group mb-[2px] flex w-fit items-center"
      href={`/community/${postType}/${post.id}`}
    >
      <RowIcon type={type} />
      <RowDescription type={type} />
      <RowPostTitle title={post.title} />
    </Link>
  );
}

function RowIcon({ type }: { type: RowType }) {
  const iconName = type == 'next' ? 'expand_less' : 'expand_more';
  return (
    <span className="material-symbols-rounded text-yoon font-normal text-main-orange">
      {iconName}
    </span>
  );
}

function RowDescription({ type }: { type: RowType }) {
  const description = type == 'next' ? '다음 글' : '이전 글';
  return <p className="mr-3 flex-shrink-0 text-md font-medium text-main-orange">{description}</p>;
}

function RowPostTitle({ title }: { title?: string }) {
  return (
    <p
      className={`
      ${title ? 'group-hover:underline' : ''} 
      line-clamp-1 text-md font-normal
      `}
    >
      {title ?? '(없음)'}
    </p>
  );
}

function PostListLink({ href }: { href: string }) {
  return (
    <PaginatedLink
      href={href}
      className="flex h-[35px] items-center rounded-[0.0625rem] border border-neutral-700 bg-neutral-800 px-[15px] text-md font-semibold tracking-[0.1rem] text-white hover:border-neutral-500 hover:bg-neutral-500"
    >
      목록
    </PaginatedLink>
  );
}

function PostEditLink({ href }: { href: string }) {
  return (
    <Link
      href={href}
      className="mr-3 flex h-[35px] items-center rounded-[0.0625rem] border border-neutral-300 bg-neutral-100 px-[17px] text-md font-semibold tracking-[0.1em] text-neutral-500 hover:bg-neutral-200"
    >
      편집
    </Link>
  );
}
