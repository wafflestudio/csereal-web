import { Attachment } from '@/apis/types/attachment';
import Clip from '@/public/image/clip.svg';
import { formatBytes } from '@/utils/format';

const CouncilAttachment = ({ name, bytes, url }: Attachment) => {
  const byteStr = formatBytes(bytes);

  return (
    <div className="relative mt-[25px] flex w-full rounded-[2px] border border-neutral-200 bg-neutral-50 p-[16px]">
      <a
        className="flex w-full text-base font-medium text-neutral-700 hover:underline"
        href={encodeURI(url)}
        download={name}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="overflow-hidden text-ellipsis whitespace-nowrap">{name}</span>
        <span className="ml-2">({byteStr})</span>
      </a>
      <Clip className="absolute right-2 top-[-1.5rem]" />
    </div>
  );
};

export default CouncilAttachment;
