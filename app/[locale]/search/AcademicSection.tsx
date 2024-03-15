import { searchAcademics } from '@/apis/search';

import { AcademicType } from '@/types/search';

import { undergraduateAcademics } from '@/utils/segmentNode';

import BasicRow from './helper/BasicRow';
import Section from './helper/Section';

export default async function AcademicSection({ keyword }: { keyword: string }) {
  const academic = await searchAcademics({ keyword, number: 3, amount: 200 });

  return (
    <Section title="학사 및 교과" size={academic.total}>
      <div className="flex flex-col gap-7">
        {academic.results.map((result) => {
          const node = toNode(result.academicsType);

          return (
            <BasicRow
              key={result.id}
              href={toURL(result.academicsType, result.id, result.name)}
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

const toNode = (postType: AcademicType) => {
  postType;
  return undergraduateAcademics;
};

const toURL = (postType: AcademicType, id: number, name: string) => {
  postType;
  id;
  name;
  return '';
};
