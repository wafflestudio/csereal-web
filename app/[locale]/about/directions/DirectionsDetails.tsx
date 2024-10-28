import { EditButton } from '@/components/common/Buttons';
import LoginVisible from '@/components/common/LoginVisible';
import HTMLViewer from '@/components/editor/HTMLViewer';
import { Direction } from '@/types/about';
import { getPath } from '@/utils/page';
import { directions } from '@/utils/segmentNode';
import { replaceSpaceWithDash } from '@/utils/string';

const directionsPath = getPath(directions);

export default function DirectionsDetails({ direction }: { direction: Direction }) {
  return (
    <div>
      <div className="justify-between sm:flex">
        <DirectionsTitle name={direction.name} />
        <LoginVisible staff>
          <EditButton
            href={`${directionsPath}/edit?selected=${replaceSpaceWithDash(direction.name)}`}
          />
        </LoginVisible>
      </div>
      <HTMLViewer htmlContent={direction.description} className="ml-2.5" />
    </div>
  );
}

function DirectionsTitle({ name }: { name: string }) {
  return <h4 className="mb-4 h-10 text-base font-bold sm:text-[24px]">{name}</h4>;
}
