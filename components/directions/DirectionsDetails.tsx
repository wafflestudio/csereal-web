import HTMLViewer from '@/components/common/HTMLViewer';

import { Direction } from '@/types/directions';

export default function DirectionsDetails({ direction }: { direction: Direction }) {
  return (
    <div>
      <DirectionsTitle name={direction.name} />
      <HTMLViewer htmlContent={direction.description} margin="ml-2.5" />
    </div>
  );
}

// 생각하기 너무 귀찮았음...
const getDirectionsPostposition = (directionName: string) => {
  if (directionName === '대중교통') {
    return '으로';
  } else if (directionName === '승용차') {
    return '로';
  } else {
    return '에서';
  }
};

function DirectionsTitle({ name }: { name: string }) {
  return (
    <h4 className="h-10 mb-4 font-black text-[1.25rem]">{`${name}${getDirectionsPostposition(
      name,
    )} 오는 방법`}</h4>
  );
}
