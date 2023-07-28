import Link from 'next/link';

interface AdjPostInfo {
  title: string;
  href: string;
}

interface AdjPostNavProps {
  prevPost?: AdjPostInfo;
  nextPost?: AdjPostInfo;
  margin?: string;
}

export default function AdjPostNav({ prevPost, nextPost, margin = '' }: AdjPostNavProps) {
  return (
    <div className={`flex flex-col ${margin}`}>
      <Row post={prevPost} type="next" />
      <Row post={nextPost} type="prev" />
      <PostListLink />
    </div>
  );
}

type RowType = 'next' | 'prev';

function Row({ post, type }: { post?: AdjPostInfo; type: RowType }) {
  if (post) {
    return (
      <Link className="group flex items-center" href={post.href}>
        <RowIcon type={type} />
        <RowDescription type={type} />
        <RowPostTitle title={post.title} />
      </Link>
    );
  } else {
    return (
      <div className="group flex items-center">
        <RowIcon type={type} />
        <RowDescription type={type} />
        <RowPostTitle />
      </div>
    );
  }
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
      font-yoon text-xs font-normal line-clamp-1 text-neutral-700
      `}
    >
      {title ?? '(없음)'}
    </p>
  );
}

function PostListLink() {
  return (
    <Link
      href="/news"
      className="self-end text-white mt-6 text-[.8125rem] font-noto bg-neutral-600 px-5 py-2 rounded-[.0625rem] font-bold leading-5"
    >
      목록
    </Link>
  );
}
