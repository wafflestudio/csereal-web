import { Link } from '@/navigation';

import { AdjPostInfo } from '@/types/post';

import LoginStaffVisible from './auth/LoginStaffVisible';
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
      <Row post={nextPost} type="next" />
      <Row post={prevPost} type="prev" />
      <div className="flex justify-end mt-6">
        <LoginStaffVisible>
          {id && (
            <>
              <PostDeleteButton postType={postType} id={id} />
              <PostEditLink href={`/community/${postType}/${id}/edit`} />
            </>
          )}
        </LoginStaffVisible>
        <PostListLink href={`/community/${postType}`} />
      </div>
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
      className="flex items-center text-white text-sm font-noto bg-neutral-700 hover:bg-neutral-500 px-[17px] h-[35px] rounded-[0.0625rem] border border-neutral-700 hover:border-neutral-500 font-bold"
    >
      목록
    </Link>
  );
}

function PostEditLink({ href }: { href: string }) {
  return (
    <Link
      href={href}
      className="flex items-center mr-3 px-[17px] h-[35px] rounded-[0.0625rem] border border-neutral-500 bg-neutral-100 hover:bg-neutral-500 font-noto font-bold text-sm text-neutral-500 hover:text-white tracking-[0.02em]"
    >
      편집
    </Link>
  );
}
