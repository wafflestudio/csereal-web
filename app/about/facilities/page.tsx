import { getMockFacilitiesPosts } from '@/apis/facilities';

import FacilitiesRow from '@/components/facilities/FacilitiesRow';
import PageLayout from '@/components/layout/pageLayout/PageLayout';

export default async function FacilitiesPage() {
  const { facilitiesList } = await getFacilitiesData();
  return (
    <PageLayout titleType="big" marginBottom=" mb-[1.125rem]">
      <div className="flex flex-col">
        {facilitiesList.map((post, index) => (
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

async function getFacilitiesData() {
  const posts = getMockFacilitiesPosts();
  return posts;
}
