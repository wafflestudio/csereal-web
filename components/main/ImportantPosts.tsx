import Link from 'next/link';

import { ImportantCategory } from '@/types/admin';

interface ImportantPostsProps {
  posts: ImportantPostMain[];
}

export default function ImportantPosts({ posts }: ImportantPostsProps) {
  return (
    <section className="z-10 w-[350px] ml-[216px] mt-[38px]">
      <ul className="w-full flex flex-col gap-7">
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
        <h4 className="font-medium text-base tracking-wide mb-2 line-clamp-1">{post.title}</h4>
        <p className="text-xs tracking-wide line-clamp-1">{post.description}</p>
      </Link>
    </li>
  );
}
