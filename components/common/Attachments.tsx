import Clip from '@/public/image/clip.svg';

interface AttachmentProps {
  files: Attachment[];
}

interface Attachment {
  name: string;
  bytes: number;
  url: string;
}

export default function Attachments({ files }: AttachmentProps) {
  return (
    <div className="relative flex flex-col gap-2 w-[40rem] mt-5 mb-6 px-4 py-3 bg-white rounded-sm border border-neutral-300">
      {files.map((file, index) => (
        <AttachmentAnchor key={index} {...file} />
      ))}
      <Clip className="absolute top-[-1.5rem] right-3" />
    </div>
  );
}

const AttachmentAnchor = ({ name, bytes, url }: Attachment) => {
  const kilobyte = Math.round(bytes / 100);
  return (
    <a className="text-xs font-normal hover:underline w-fit" href={url} download={name}>
      {name}({kilobyte / 10}KB)
    </a>
  );
};
