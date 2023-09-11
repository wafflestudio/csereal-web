import Link from 'next/link';

import { ImportantCategory } from '@/types/admin';

interface ImportantPostsProps {
  posts: ImportantPostMain[];
}

export default function ImportantPosts({ posts }: ImportantPostsProps) {
  return (
    <section>
      <ul className="flex flex-col gap-6">
        {posts.map((post) => (
          <ImportantPostPreviewMain post={post} key={post.title} />
        ))}
      </ul>
    </section>
  );
}

interface ImportantPostMain {
  category: ImportantCategory;
  id: number;
  title: string;
  summary: string;
}

interface ImportantPostPreviewMainProps {
  post: ImportantPostMain;
}

function ImportantPostPreviewMain({ post }: ImportantPostPreviewMainProps) {
  return (
    <li>
      <Link href={`/community/${post.category}/${post.id}`}>
        <h4 className="font-medium text-base tracking-wide">{post.title}</h4>
        <p className="text-xs tracking-wide">{post.summary}</p>
      </Link>
    </li>
  );
}
