import { searchResearch } from '@/apis/search';

import { ResearchType } from '@/types/search';

import { getPath } from '@/utils/page';
import { researchCenters, researchLabs, topConferenceList } from '@/utils/segmentNode';

import BasicRow from './helper/BasicRow';
import Section from './helper/Section';
import { DESCRIPTION_CHAR_CNT } from './SearchResult';

export default async function ResearchSection({ keyword }: { keyword: string }) {
  const about = await searchResearch({ keyword, number: 3, amount: DESCRIPTION_CHAR_CNT });
  console.log(about);

  return (
    <Section title="연구" size={about.total}>
      <div className="flex flex-col gap-7">
        {about.results.map((result) => {
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
      return topConferenceList; // TODO: 맞는지 확인 필요
    case 'LAB':
      return researchLabs;
    case 'RESEARCH':
      return researchCenters;
  }
};

const labPath = getPath(researchLabs);
const centerPath = getPath(researchCenters);

const toURL = (postType: ResearchType, id: number, name: string) => {
  switch (postType) {
    case 'CONFERENCE':
      return ''; // TODO
    case 'LAB':
      return `${labPath}/${id}`;
    case 'RESEARCH':
      return `${centerPath}?selected=${name}`;
  }
};