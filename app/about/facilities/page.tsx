'use client';

import { useCallback, useEffect, useState } from 'react';

import { getMockFacilitiesPosts } from '@/apis/facilities';

import FacilitiesRow from '@/components/facilities/FacilitiesRow';
import PageLayout from '@/components/layout/PageLayout';

import { facilities } from '@/types/page';
import { GETFacilitiesPostsResponse } from '@/types/post';

export default function FacilitiesPage() {
  const [posts, setPosts] = useState<GETFacilitiesPostsResponse['facilitiesList']>([]);

  const fetchPost = useCallback(async () => {
    const res = await getMockFacilitiesPosts();
    setPosts(res.facilitiesList);
  }, []);

  useEffect(() => {
    fetchPost();
  }, [fetchPost]);

  return (
    <PageLayout currentPage={facilities} title="시설 안내" titleSize="text-2xl">
      <div className="flex flex-col">
        {posts.map((post, index) => (
          <div
            key={index}
            className={index !== 0 ? 'border-t-[1px] border-neutral-200' : undefined}
          >
            <FacilitiesRow
              name={post.name}
              description={post.description}
              location={post.location}
              imageURL={post.imageURL}
            />
          </div>
        ))}
      </div>
    </PageLayout>
  );
}
