import { Link } from '@/navigation';

import RangeBolded from '@/components/common/RangeBolded';

import { AboutPreview } from '@/types/search';

import { getPath } from '@/utils/page';
import {
  contact,
  directions,
  facilities,
  futureCareers,
  greetings,
  history,
  overview,
  studentClubs,
} from '@/utils/segmentNode';

import OrangeCircle from './OrangeCircle';

export default function AboutRow({ preview }: { preview: AboutPreview }) {
  const node = postTypeToNode(preview.aboutPostType);

  return (
    <Link className="group flex flex-col gap-1" href={getPath(node)}>
      <div className="flex items-center gap-2">
        <OrangeCircle />
        <h3 className="text-base font-semibold">{node.name}</h3>
      </div>
      <RangeBolded {...preview} />
      <p className="text-md text-main-orange group-hover:underline">{`소개 > ${node.name}`}</p>
    </Link>
  );
}

const postTypeToNode = (postType: AboutPreview['aboutPostType']) => {
  switch (postType) {
    case 'OVERVIEW':
      return overview;
    case 'GREETINGS':
      return greetings;
    case 'HISTORY':
      return history;
    case 'FUTURE_CAREERS':
      return futureCareers;
    case 'STUDENT_CLUBS':
      return studentClubs;
    case 'FACILITIES':
      return facilities;
    case 'CONTACT':
      return contact;
    case 'DIRECTIONS':
      return directions;
  }
};
