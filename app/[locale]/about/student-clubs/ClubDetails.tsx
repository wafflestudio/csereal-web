import SelectionTitle from '@/components/common/selection/SelectionTitle';
import HTMLViewer from '@/components/editor/HTMLViewer';
import { Club } from '@/types/about';

export default function ClubDetails({
  club: { name, engName, description, imageURL },
}: {
  club: Club;
}) {
  return (
    <div>
      <ClubTitle name={name} engName={engName} />
      <HTMLViewer
        htmlContent={description}
        topRightContent={
          imageURL
            ? {
                type: 'image',
                widthPX: 320,
                heightPX: 200,
                url: imageURL,
                mobileFullWidth: true,
              }
            : undefined
        }
      />
    </div>
  );
}

function ClubTitle({ name, engName }: { name: string; engName: string }) {
  return (
    <SelectionTitle animationKey={name}>
      <div className="flex items-center gap-2">
        <span className="text-base font-bold sm:text-[24px]">{name}</span>
        <span className="pt-[0.1875rem] text-xs font-medium tracking-[0.02rem] sm:text-md">
          {engName}
        </span>
      </div>
    </SelectionTitle>
  );
}
