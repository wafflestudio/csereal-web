import { AdmissionsSearchResult } from '@/apis/types/search';
import BasicRow from '@/app/[locale]/search/helper/BasicRow';
import Section from '@/app/[locale]/search/helper/Section';
import { admissions } from '@/constants/segmentNode';
import { getPath } from '@/utils/page';

export default async function AdmissionSection({
  admission,
}: {
  admission: AdmissionsSearchResult;
}) {
  return (
    <Section title="입학" size={admission.total}>
      <div className="flex flex-col gap-7">
        {admission.admissions.map((result) => {
          const node = toNode(result.mainType, result.postType);

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

const rootNode = admissions;

const toNode = (mainType: string, postType: string) => {
  const _mainType = mainType.replace('_', '-');
  const _postType = postType.replace('_', '-');

  const target = rootNode.children
    .find((x) => x.segment === _mainType)
    ?.children.find((x) => x.segment === _postType);

  if (target === undefined) return admissions;

  return target;
};
