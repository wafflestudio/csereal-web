import Link from 'next/link';

import { Club } from '@/types/club';

import HTMLViewer from '../common/HTMLViewer';

export default function ClubDetails({ club }: { club: Club }) {
  return (
    <div>
      <ClubTitle name={club.name} eng={club.eng} href={club.href} />
      <HTMLViewer htmlContent={club.description} mainImage={club.image} />
    </div>
  );
}

function ClubTitle({ name, eng, href }: { name: string; eng: string; href?: string }) {
  return (
    <h4>
      {href ? (
        <Link href={href} target="_blank">
          <span className="text-lg font-bold">{name}</span>
          <span className="text-md">{eng}</span>
          <span>아이콘</span>
        </Link>
      ) : (
        <>
          <span className="text-lg font-bold">{name}</span>
          <span className="text-md">{eng}</span>
        </>
      )}
    </h4>
  );
}
