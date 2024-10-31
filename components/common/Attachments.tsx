import Clip from '@/public/image/clip.svg';

export interface Attachment {
  id: number;
  name: string;
  bytes: number;
  url: string;
}

// TODO: 여러 맥락에서 사용되므로 마진 prop으로 건네주기
export default function Attachments({ files }: { files: Attachment[] }) {
  if (files.length === 0) return <></>;

  return (
    <div className="relative mb-9 mt-3 flex flex-col gap-2 self-start rounded-sm border border-neutral-200 bg-white py-3 pl-4 pr-20 sm:mb-11 sm:mt-5 sm:w-auto sm:max-w-fit sm:pr-[10rem] ">
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
