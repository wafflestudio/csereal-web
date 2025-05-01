import { useTranslations } from 'next-intl';

import { Role } from '@/apis/types/role';
import PaginatedLink from '@/app/[locale]/community/components/PaginatedLink';
import PostDeleteButton from '@/app/[locale]/community/components/PostDeleteButton';
import LoginVisible from '@/components/common/LoginVisible';
import { Link } from '@/i18n/routing';

type PostFooterProps = {
  path: string;
  id?: string;
  post: {
    nextId: number | null;
    nextTitle: string | null;
    prevId: number | null;
    prevTitle: string | null;
  };
  margin?: string;
  role?: Role[] | Role;
  deleteAction: (id: number) => Promise<{ message: string } | undefined>;
};

type AdjPost = {
  id: number;
  title: string;
};

type RowType = 'next' | 'prev';

export default function PostFooter({
  path,
  margin = '',
  id,
  post,
  role = 'ROLE_STAFF',
  deleteAction,
}: PostFooterProps) {
  const nextPost =
    post.nextId && post.nextTitle ? { id: post.nextId, title: post.nextTitle } : null;
  const prevPost =
    post.prevId && post.prevTitle ? { id: post.prevId, title: post.prevTitle } : null;

  return (
    <div className={`flex flex-col ${margin}`}>
      {nextPost && <Row post={nextPost} type="next" path={path} />}
      {prevPost && <Row post={prevPost} type="prev" path={path} />}
      <div className="mt-16 flex justify-end">
        <LoginVisible role={role}>
          {id && (
            <>
              <PostDeleteButton deleteAction={deleteAction} id={id} />
              <PostEditLink href={`${path}/${id}/edit`} />
            </>
          )}
        </LoginVisible>
        <PostListLink href={`${path}`} />
      </div>
    </div>
  );
}

function Row({ post, type, path }: { post: AdjPost; type: RowType; path: string }) {
  return (
    <Link className="group mb-[2px] flex w-fit items-center" href={`${path}/${post.id}`}>
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
  const t = useTranslations('Content');

  const description = type == 'next' ? '다음글' : '이전글';
  return (
    <p className="mr-3 flex-shrink-0 text-md font-medium text-main-orange">{t(description)}</p>
  );
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
  const t = useTranslations('Content');

  return (
    <PaginatedLink
      href={href}
      className="flex h-[35px] items-center rounded-[0.0625rem] border border-neutral-700 bg-neutral-800 px-[15px] text-md font-semibold tracking-[0.1rem] text-white hover:border-neutral-500 hover:bg-neutral-500"
    >
      {t('목록')}
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
