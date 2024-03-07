import Link from 'next/link';

import { ImportantCategory } from '@/types/admin';

interface ImportantPostsProps {
  posts: ImportantPostMain[];
}

export default function ImportantPosts({ posts }: ImportantPostsProps) {
  return (
    <section className="z-10 ml-[216px] mt-[38px] w-[350px]">
      <ul className="flex w-full flex-col gap-7">
        {posts.map((post) => (
          <ImportantPostPreviewMain post={post} key={`${post.id}_${post.title}`} />
        ))}
      </ul>
    </section>
  );
}

interface ImportantPostMain {
  category: ImportantCategory;
  id: number;
  title: string;
  description: string;
}

interface ImportantPostPreviewMainProps {
  post: ImportantPostMain;
}

function ImportantPostPreviewMain({ post }: ImportantPostPreviewMainProps) {
  return (
    <li>
      <Link href={`/community/${post.category}/${post.id}`}>
        <h4 className="font-noto mb-2 line-clamp-1 text-xs font-medium tracking-wide">
          {post.title}
        </h4>
        <p className="line-clamp-1 text-xs tracking-wide">{post.description}</p>
      </Link>
    </li>
  );
}
