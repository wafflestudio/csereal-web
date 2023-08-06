import { Club } from '@/types/club';

import HTMLViewer from '../common/HTMLViewer';

export default function ClubDetails({ club }: { club: Club }) {
  return (
    <div>
      <h4>
        <span className="text-lg font-bold">{club.name}</span>
        <span className="text-md">{club.eng}</span>
      </h4>
      <HTMLViewer htmlContent={club.description} mainImage={club.image} />
    </div>
  );
}
