import Link from 'next/link';

import { AdjPostInfo } from '@/types/post';

interface AdjPostNavProps {
  prevPost?: AdjPostInfo;
  nextPost?: AdjPostInfo;
  href: string;
  margin?: string;
}

export default function AdjPostNav({ prevPost, nextPost, margin = '', href }: AdjPostNavProps) {
  return (
    <div className={`flex flex-col ${margin}`}>
      <Row post={nextPost} type="next" />
      <Row post={prevPost} type="prev" />
      <PostListLink href={href} />
    </div>
  );
}

type RowType = 'next' | 'prev';

function Row({ post, type }: { post?: AdjPostInfo; type: RowType }) {
  return (
    post && (
      <Link className="group flex items-center w-fit" href={post.href}>
        <RowIcon type={type} />
        <RowDescription type={type} />
        <RowPostTitle title={post.title} />
      </Link>
    )
  );
}

function RowIcon({ type }: { type: RowType }) {
  const iconName = type == 'next' ? 'expand_less' : 'expand_more';
  return (
    <span className="material-symbols-rounded text-yoon font-normal  text-main-orange">
      {iconName}
    </span>
  );
}

function RowDescription({ type }: { type: RowType }) {
  const description = type == 'next' ? '다음 글' : '이전 글';
  return (
    <p className="font-yoon text-xs font-medium mr-3 flex-shrink-0 text-main-orange">
      {description}
    </p>
  );
}

function RowPostTitle({ title }: { title?: string }) {
  return (
    <p
      className={`
      ${title ? 'group-hover:underline' : ''} 
      font-yoon text-xs font-normal line-clamp-1
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
      className="self-end mt-6 text-sm font-noto bg-neutral-200 hover:bg-neutral-300 px-5 py-2 rounded-[0.0625rem] font-bold"
    >
      목록
    </Link>
  );
}
