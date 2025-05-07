import { AboutPreview, AboutSearchResult } from '@/apis/types/search';
import BasicRow from '@/app/[locale]/search/helper/BasicRow';
import Section from '@/app/[locale]/search/helper/Section';
import {
  contact,
  directions,
  facilities,
  futureCareers,
  greetings,
  history,
  overview,
  studentClubs,
} from '@/constants/segmentNode';
import { getPath } from '@/utils/page';

export default async function AboutSection({ about }: { about: AboutSearchResult }) {
  return (
    <Section title="소개" size={about.total}>
      <div className="flex flex-col gap-9">
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
