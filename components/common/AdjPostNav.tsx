import { Link } from '@/navigation';

import { AdjPostInfo } from '@/types/post';

import StaffVisible from './auth/StaffVisible';
import PostDeleteButton from './PostDeleteButton';

type PostType = 'notice' | 'seminar' | 'news';

interface AdjPostNavProps {
  postType: PostType;
  id?: string;
  prevPost?: AdjPostInfo;
  nextPost?: AdjPostInfo;
  margin?: string;
}

export default function AdjPostNav({
  prevPost,
  nextPost,
  margin = '',
  postType,
  id,
}: AdjPostNavProps) {
  return (
    <div className={`flex flex-col ${margin}`}>
      {nextPost && <Row post={nextPost} type="next" />}
      {prevPost && <Row post={prevPost} type="prev" />}
      <div className="mt-6 flex justify-end">
        <StaffVisible>
          {id && (
            <>
              <PostDeleteButton postType={postType} id={id} />
              <PostEditLink href={`/community/${postType}/${id}/edit`} />
            </>
          )}
        </StaffVisible>
        <PostListLink href={`/community/${postType}`} />
      </div>
    </div>
  );
}

type RowType = 'next' | 'prev';

function Row({ post, type }: { post: AdjPostInfo; type: RowType }) {
  return (
    <Link className="group flex w-fit items-center" href={post.href}>
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
    <Link
      href={href}
      className={`flex h-[35px] items-center rounded-[0.0625rem] border border-neutral-700 bg-neutral-800 px-[15px] text-md font-bold tracking-[0.1rem] text-white hover:border-neutral-500 hover:bg-neutral-500`}
    >
      목록
    </Link>
  );
}

function PostEditLink({ href }: { href: string }) {
  return (
    <Link
      href={href}
      className="mr-3 flex h-[35px] items-center rounded-[0.0625rem] border border-neutral-500 bg-neutral-100 px-[17px] text-sm font-bold tracking-[0.1em] text-neutral-500 hover:bg-neutral-500 hover:text-white"
    >
      편집
    </Link>
  );
}
