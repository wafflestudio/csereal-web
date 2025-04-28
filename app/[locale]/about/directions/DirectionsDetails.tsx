import { Direction } from '@/apis/types/about';
import { EditButton } from '@/components/common/Buttons';
import LoginVisible from '@/components/common/LoginVisible';
import HTMLViewer from '@/components/form/html/HTMLViewer';
import { directions } from '@/constants/segmentNode';
import { getPath } from '@/utils/page';
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
      <HTMLViewer htmlContent={direction.description} wrapperClassName="ml-2.5" />
    </div>
  );
}

function DirectionsTitle({ name }: { name: string }) {
  return <h4 className="mb-4 h-10 text-base font-bold sm:text-[24px]">{name}</h4>;
}
