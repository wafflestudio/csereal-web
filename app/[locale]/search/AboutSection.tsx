import { searchAbout } from '@/apis/search';

import { AboutPreview } from '@/types/search';

import { getPath } from '@/utils/page';
import {
  overview,
  greetings,
  futureCareers,
  studentClubs,
  facilities,
  contact,
  directions,
  history,
} from '@/utils/segmentNode';

import BasicRow from './helper/BasicRow';
import Section from './helper/Section';
import { DESCRIPTION_CHAR_CNT } from './SearchResult';

export default async function AboutSection({ keyword }: { keyword: string }) {
  const about = await searchAbout({ keyword, number: 3, amount: DESCRIPTION_CHAR_CNT });

  return (
    <Section title="소개" size={about.total}>
      <div className="flex flex-col gap-7">
        {about.results.map((result) => {
          const node = aboutPostTypeToNode(result.aboutPostType);

          return (
            <BasicRow
              key={result.id}
              href={getPath(node)}
              title={node.name}
              node={node}
              {...result}
            />
          );
        })}
      </div>
    </Section>
  );
}

const aboutPostTypeToNode = (postType: AboutPreview['aboutPostType']) => {
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
