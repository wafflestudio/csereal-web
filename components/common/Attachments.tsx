import Clip from '@/public/image/clip.svg';

interface Attachment {
  name: string;
  bytes: number;
  url: string;
}

export default function Attachments({ files }: { files: Attachment[] }) {
  if (files.length === 0) return <></>;

  return (
    <div className="relative mb-6 mt-5 flex flex-col gap-2 rounded-sm border border-neutral-300 bg-white px-4 py-3">
      {files.map((file, index) => (
        <AttachmentAnchor key={index} {...file} />
      ))}
      <Clip className="absolute right-3 top-[-1.5rem]" />
    </div>
  );
}

const AttachmentAnchor = ({ name, bytes, url }: Attachment) => {
  const kilobyte = Math.round(bytes / 100);
  return (
    <a
      className="flex text-sm font-normal hover:underline"
      href={url}
      download={name}
      target="_blank"
    >
      <span className="overflow-hidden text-ellipsis whitespace-nowrap">{name}</span>
      <span>({kilobyte / 10}KB)</span>
    </a>
  );
};
