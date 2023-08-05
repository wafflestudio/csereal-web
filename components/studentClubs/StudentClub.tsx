import HTMLViewer from '../common/HTMLViewer';

interface ClubInformationProps {
  club: {
    name: string;
    eng: string;
    description: string;
    image?: { url: string; width: number; height: number };
  };
}

export default function StudentClub({ club }: ClubInformationProps) {
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
