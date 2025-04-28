import { ResearchSearchResult, ResearchType } from '@/apis/types/search';
import {
  researchCenters,
  researchGroups,
  researchLabs,
  topConferenceList,
} from '@/constants/segmentNode';
import { getPath } from '@/utils/page';

import BasicRow from './helper/BasicRow';
import Section from './helper/Section';

export default async function ResearchSection({ research }: { research: ResearchSearchResult }) {
  return (
    <Section title="연구·교육" size={research.total}>
      <div className="flex flex-col gap-7">
        {research.results.map((result) => {
          const node = toNode(result.researchType);

          return (
            <BasicRow
              key={result.id}
              href={toURL(result.researchType, result.id, result.name)}
              title={result.name}
              node={node}
              {...result}
            />
          );
        })}
      </div>
    </Section>
  );
}

const toNode = (postType: ResearchType) => {
  switch (postType) {
    case 'CONFERENCE':
      return topConferenceList;
    case 'LAB':
      return researchLabs;
    case 'RESEARCH_CENTER':
      return researchCenters;
    case 'RESEARCH_GROUP':
      return researchGroups;
  }
};

const labPath = getPath(researchLabs);
const centerPath = getPath(researchCenters);
const groupPath = getPath(researchGroups);
const conferencePath = getPath(topConferenceList);

const toURL = (postType: ResearchType, id: number, name: string) => {
  switch (postType) {
    case 'CONFERENCE':
      return conferencePath;
    case 'LAB':
      return `${labPath}/${id}`;
    case 'RESEARCH_CENTER':
      return `${centerPath}?selected=${name}`;
    case 'RESEARCH_GROUP':
      return `${groupPath}?selected=${name}`;
  }
};
