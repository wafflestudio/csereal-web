import { searchAcademics } from '@/apis/search';

import { getPath } from '@/utils/page';
import { undergraduateGuide } from '@/utils/segmentNode';

import BasicRow from './helper/BasicRow';
import Section from './helper/Section';

export default async function AcademicSection({ keyword }: { keyword: string }) {
  const academic = await searchAcademics({ keyword, number: 3, amount: 200 });

  return (
    <Section title="학사 및 교과" size={academic.total}>
      <div className="flex flex-col gap-7">
        {academic.results.map((result) => {
          // TODO
          const node = undergraduateGuide;

          return (
            <BasicRow
              key={result.id}
              href={getPath(node)}
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
