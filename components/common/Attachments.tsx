import { Attachment } from '@/apis/types/attachment';
import Clip from '@/public/image/clip.svg';

export default function Attachments({
  files,
  margin = 'mb-9 mt-3 sm:mb-11 sm:mt-5',
  padding = 'py-3 pl-4 pr-20 sm:pr-[10rem]',
}: {
  files: Attachment[];
  margin?: string;
  padding?: string;
}) {
  if (files.length === 0) return <></>;

  return (
    <div
      className={`relative flex flex-col gap-2 self-start rounded-sm border border-neutral-200 bg-white sm:w-auto sm:max-w-fit ${margin} ${padding}`}
    >
      {files.map((file, index) => (
        <AttachmentAnchor key={index} {...file} />
      ))}

      <Clip className="absolute right-2 top-[-1.5rem]" />
    </div>
  );
}

const AttachmentAnchor = ({ name, bytes, url }: Attachment) => {
  const kilobyte = Math.round(bytes / 100);
  return (
    <a
      className="flex text-sm font-normal hover:underline"
      href={encodeURI(url)}
      download={name}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="overflow-hidden text-ellipsis whitespace-nowrap">{name}</span>
      <span>({kilobyte / 10}KB)</span>
    </a>
  );
};
