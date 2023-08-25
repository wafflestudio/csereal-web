import { getFacilities } from '@/apis/about';

import FacilitiesRow from '@/components/facilities/FacilitiesRow';
import PageLayout from '@/components/layout/pageLayout/PageLayout';

export default async function FacilitiesPage() {
  const { facilitiesList } = await getFacilities();
  return (
    <PageLayout titleType="big" titleMargin="mb-[1.125rem]">
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
